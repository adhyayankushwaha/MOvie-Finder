import { Genre, Movie, MovieDetails, TimeWindow } from '../types/movie';
import { FALLBACK_MOVIES, TMDB_GENRES } from '../data/fallbackMovies';

export async function checkApiStatus(): Promise<{ connected: boolean; message: string }> {
  try {
    const res = await fetch('/api/tmdb/status');
    if (res.ok) {
      const data = await res.json();
      return {
        connected: Boolean(data.connected),
        message: data.message || (data.connected ? 'Connected to TMDB API' : 'Not connected'),
      };
    }
  } catch (err) {
    console.warn('API status check error:', err);
  }
  return { connected: false, message: 'Could not connect to backend proxy.' };
}

/**
 * Fetch list of genres
 */
export async function fetchGenres(): Promise<Genre[]> {
  try {
    const res = await fetch('/api/tmdb/genres');
    if (res.ok) {
      const data = await res.json();
      if (data.genres && data.genres.length > 0) {
        return data.genres;
      }
    }
  } catch (err) {
    console.warn('Backend genres error, using fallback:', err);
  }

  return TMDB_GENRES;
}

/**
 * Fetch Trending Movies (day or week)
 */
export async function fetchTrendingMovies(
  timeWindow: TimeWindow = 'day',
  page: number = 1
): Promise<{ movies: Movie[]; totalPages: number; isLive: boolean }> {
  try {
    const res = await fetch(`/api/tmdb/trending?timeWindow=${timeWindow}&page=${page}`);
    if (res.ok) {
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        return {
          movies: data.results,
          totalPages: data.total_pages || 1,
          isLive: true,
        };
      }
    }
  } catch (err) {
    console.warn('Backend trending error, using fallback:', err);
  }

  // Fallback: Return sorted fallback movies
  const sorted = [...FALLBACK_MOVIES].sort((a, b) => b.popularity - a.popularity);
  return {
    movies: sorted,
    totalPages: 1,
    isLive: false,
  };
}

/**
 * Search Movies by text
 */
export async function searchMovies(
  query: string,
  page: number = 1
): Promise<{ movies: Movie[]; totalPages: number; isLive: boolean }> {
  const trimmed = query.trim();
  if (!trimmed) {
    return fetchTrendingMovies('day', page);
  }

  try {
    const res = await fetch(`/api/tmdb/search?query=${encodeURIComponent(trimmed)}&page=${page}`);
    if (res.ok) {
      const data = await res.json();
      return {
        movies: data.results || [],
        totalPages: data.total_pages || 1,
        isLive: true,
      };
    }
  } catch (err) {
    console.warn('Backend search error, using fallback:', err);
  }

  // Fallback search
  const lower = trimmed.toLowerCase();
  const matched = FALLBACK_MOVIES.filter(
    (m) =>
      m.title.toLowerCase().includes(lower) ||
      m.overview.toLowerCase().includes(lower) ||
      m.genres.some((g) => g.name.toLowerCase().includes(lower))
  );

  return {
    movies: matched,
    totalPages: 1,
    isLive: false,
  };
}

/**
 * Discover movies filtered by genre
 */
export async function fetchMoviesByGenre(
  genreId: number,
  sortBy: string = 'popularity.desc',
  page: number = 1
): Promise<{ movies: Movie[]; totalPages: number; isLive: boolean }> {
  try {
    const res = await fetch(
      `/api/tmdb/discover?with_genres=${genreId}&sort_by=${encodeURIComponent(sortBy)}&page=${page}`
    );
    if (res.ok) {
      const data = await res.json();
      return {
        movies: data.results || [],
        totalPages: data.total_pages || 1,
        isLive: true,
      };
    }
  } catch (err) {
    console.warn('Backend genre discover error, using fallback:', err);
  }

  // Fallback filter
  let filtered = FALLBACK_MOVIES.filter((m) => m.genre_ids.includes(genreId));
  if (filtered.length === 0) {
    filtered = FALLBACK_MOVIES;
  }

  filtered.sort((a, b) => {
    if (sortBy === 'vote_average.desc') return b.vote_average - a.vote_average;
    if (sortBy === 'primary_release_date.desc')
      return new Date(b.release_date).getTime() - new Date(a.release_date).getTime();
    if (sortBy === 'title.asc') return a.title.localeCompare(b.title);
    return b.popularity - a.popularity;
  });

  return {
    movies: filtered,
    totalPages: 1,
    isLive: false,
  };
}

/**
 * Fetch full movie details with videos, credits, and similar films
 */
export async function fetchMovieDetails(id: number): Promise<MovieDetails | null> {
  try {
    const res = await fetch(`/api/tmdb/movie/${id}`);
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn(`Backend details error for ${id}, using fallback:`, err);
  }

  // Check fallback movies
  const found = FALLBACK_MOVIES.find((m) => m.id === id);
  if (found) {
    return {
      ...found,
      similar: {
        results: FALLBACK_MOVIES.filter(
          (m) => m.id !== id && m.genre_ids.some((g) => found.genre_ids.includes(g))
        ).slice(0, 6),
      },
    };
  }

  return null;
}
