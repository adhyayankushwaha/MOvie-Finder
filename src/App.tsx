import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroFeatured } from './components/HeroFeatured';
import { GenreFilter } from './components/GenreFilter';
import { SearchBar } from './components/SearchBar';
import { MovieCard } from './components/MovieCard';
import { MovieModal } from './components/MovieModal';
import { WatchlistView } from './components/WatchlistView';
import { Genre, Movie, SortOption, TimeWindow } from './types/movie';
import {
  fetchTrendingMovies,
  fetchMoviesByGenre,
  searchMovies,
  fetchGenres,
  checkApiStatus,
} from './services/tmdb';
import { Film, Flame, Sparkles, Compass } from 'lucide-react';

const WATCHLIST_STORAGE_KEY = 'cinescope_watchlist';

export default function App() {
  const [activeTab, setActiveTab] = useState<'trending' | 'genres' | 'discover' | 'watchlist'>('trending');
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<SortOption>('popularity.desc');
  const [timeWindow, setTimeWindow] = useState<TimeWindow>('day');
  const [isLiveApi, setIsLiveApi] = useState<boolean>(false);

  // Modals
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [openTrailerDirectly, setOpenTrailerDirectly] = useState<boolean>(false);

  // Watchlist persisted state
  const [watchlist, setWatchlist] = useState<Movie[]>(() => {
    try {
      const saved = localStorage.getItem(WATCHLIST_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const saveWatchlist = (newList: Movie[]) => {
    setWatchlist(newList);
    try {
      localStorage.setItem(WATCHLIST_STORAGE_KEY, JSON.stringify(newList));
    } catch (err) {
      console.error('Failed to save watchlist to localStorage', err);
    }
  };

  const handleToggleWatchlist = (movie: Movie) => {
    const exists = watchlist.some((m) => m.id === movie.id);
    if (exists) {
      saveWatchlist(watchlist.filter((m) => m.id !== movie.id));
    } else {
      saveWatchlist([...watchlist, movie]);
    }
  };

  const handleRemoveFromWatchlist = (e: React.MouseEvent, movie: Movie) => {
    e.stopPropagation();
    saveWatchlist(watchlist.filter((m) => m.id !== movie.id));
  };

  const handleClearWatchlist = () => {
    saveWatchlist([]);
  };

  // Map of genre id to name
  const genresMap = useMemo(() => {
    const map: Record<number, string> = {};
    genres.forEach((g) => {
      map[g.id] = g.name;
    });
    return map;
  }, [genres]);

  // Check API status & load genres once
  useEffect(() => {
    checkApiStatus().then((status) => {
      setIsLiveApi(status.connected);
    });

    fetchGenres().then((list) => {
      setGenres(list);
    });
  }, []);

  // Main data loader
  useEffect(() => {
    let isCancelled = false;
    setLoading(true);

    const loadData = async () => {
      try {
        let result: { movies: Movie[]; totalPages: number; isLive: boolean };

        if (searchQuery.trim()) {
          result = await searchMovies(searchQuery.trim());
        } else if (selectedGenreId !== null) {
          result = await fetchMoviesByGenre(selectedGenreId, sortBy);
        } else {
          result = await fetchTrendingMovies(timeWindow);
        }

        if (!isCancelled) {
          let list = [...result.movies];

          // Client-side sort when necessary
          if (sortBy === 'vote_average.desc') {
            list.sort((a, b) => b.vote_average - a.vote_average);
          } else if (sortBy === 'primary_release_date.desc') {
            list.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
          } else if (sortBy === 'title.asc') {
            list.sort((a, b) => a.title.localeCompare(b.title));
          } else if (sortBy === 'popularity.desc') {
            list.sort((a, b) => b.popularity - a.popularity);
          }

          setMovies(list);
          setIsLiveApi(result.isLive);

          // Set featured movie
          if (list.length > 0 && !searchQuery.trim() && selectedGenreId === null) {
            setFeaturedMovie(list[0]);
          } else if (list.length > 0 && !featuredMovie) {
            setFeaturedMovie(list[0]);
          }
          setLoading(false);
        }
      } catch (err) {
        console.error('Error fetching movies:', err);
        if (!isCancelled) setLoading(false);
      }
    };

    loadData();

    return () => {
      isCancelled = true;
    };
  }, [searchQuery, selectedGenreId, sortBy, timeWindow]);

  const handleOpenDetails = (movie: Movie) => {
    setOpenTrailerDirectly(false);
    setSelectedMovie(movie);
  };

  const handleWatchTrailer = (movie: Movie) => {
    setOpenTrailerDirectly(true);
    setSelectedMovie(movie);
  };

  // Selected genre object
  const currentGenre = genres.find((g) => g.id === selectedGenreId);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab === 'trending') {
            setSelectedGenreId(null);
            setSearchQuery('');
          }
        }}
        watchlistCount={watchlist.length}
        onOpenApiKeyModal={() => {}}
        isLiveApi={isLiveApi}
      />

      {/* Main Content Area */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'watchlist' ? (
          <WatchlistView
            watchlist={watchlist}
            onSelectMovie={handleOpenDetails}
            onRemoveFromWatchlist={handleRemoveFromWatchlist}
            onClearWatchlist={handleClearWatchlist}
            onBrowseTrending={() => setActiveTab('trending')}
            genresMap={genresMap}
          />
        ) : (
          <>
            {/* Hero Featured Movie (Only on trending tab without active search or genre filter) */}
            {activeTab === 'trending' && !searchQuery && selectedGenreId === null && featuredMovie && (
              <HeroFeatured
                movie={featuredMovie}
                genresMap={genresMap}
                onOpenDetails={handleOpenDetails}
                onWatchTrailer={handleWatchTrailer}
                isWatchlisted={watchlist.some((m) => m.id === featuredMovie.id)}
                onToggleWatchlist={handleToggleWatchlist}
              />
            )}

            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2">
                  {searchQuery ? (
                    <>
                      <Compass className="h-5 w-5 text-amber-500" />
                      <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                        Search Results for "{searchQuery}"
                      </h2>
                    </>
                  ) : selectedGenreId !== null ? (
                    <>
                      <Sparkles className="h-5 w-5 text-amber-500" />
                      <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                        {currentGenre?.name || 'Genre'} Films
                      </h2>
                    </>
                  ) : (
                    <>
                      <Flame className="h-5 w-5 text-amber-500" />
                      <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                        Trending Films {timeWindow === 'day' ? 'Today' : 'This Week'}
                      </h2>
                    </>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  {loading
                    ? 'Loading cinematic titles...'
                    : `Showing ${movies.length} ${movies.length === 1 ? 'film' : 'films'}`}
                </p>
              </div>
            </div>

            {/* Genre Filter Bar */}
            <div className="mb-6">
              <GenreFilter
                genres={genres}
                selectedGenreId={selectedGenreId}
                onSelectGenre={(genreId) => {
                  setSelectedGenreId(genreId);
                  setSearchQuery('');
                }}
              />
            </div>

            {/* Search Bar & Controls */}
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={(q) => {
                setSearchQuery(q);
                if (q) setSelectedGenreId(null);
              }}
              sortBy={sortBy}
              setSortBy={setSortBy}
              timeWindow={timeWindow}
              setTimeWindow={setTimeWindow}
              showTimeWindowToggle={activeTab === 'trending'}
            />

            {/* Movies Grid */}
            {loading ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 py-12">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="flex flex-col rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/40 animate-pulse"
                  >
                    <div className="aspect-[2/3] w-full bg-neutral-800/60" />
                    <div className="p-4 space-y-2">
                      <div className="h-3 w-16 bg-neutral-800 rounded" />
                      <div className="h-4 w-3/4 bg-neutral-800 rounded" />
                      <div className="h-3 w-full bg-neutral-800/40 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            ) : movies.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center rounded-3xl border border-neutral-800/80 bg-neutral-900/30 p-8 my-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-800 text-neutral-500 mb-4">
                  <Film className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-white font-display">
                  No movies found
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-neutral-400 max-w-sm">
                  We couldn't find any films matching your search or active filter. Try resetting filters or searching another title.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedGenreId(null);
                  }}
                  className="mt-5 rounded-xl bg-amber-500 px-4 py-2 text-xs font-semibold text-neutral-950 hover:bg-amber-400 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {movies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    genresMap={genresMap}
                    onSelect={handleOpenDetails}
                    isWatchlisted={watchlist.some((m) => m.id === movie.id)}
                    onToggleWatchlist={(e) => {
                      e.stopPropagation();
                      handleToggleWatchlist(movie);
                    }}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer conforming to domain rules */}
      <footer className="border-t border-neutral-800/80 bg-neutral-950 py-8 text-neutral-500 text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Film className="h-4 w-4 text-amber-500" />
            <span className="font-semibold text-neutral-300 font-display">CineScope</span>
            <span>· Live TMDB API & Curated Cinema Engine</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className={`h-2 w-2 rounded-full ${isLiveApi ? 'bg-emerald-500' : 'bg-amber-500'}`} />
              <span className="text-neutral-400">{isLiveApi ? 'Live TMDB Connected' : 'Catalog Active'}</span>
            </span>
            <span>© {new Date().getFullYear()} CineScope</span>
          </div>
        </div>
      </footer>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          onSelectMovie={handleOpenDetails}
          isWatchlisted={watchlist.some((m) => m.id === selectedMovie.id)}
          onToggleWatchlist={handleToggleWatchlist}
          autoPlayTrailer={openTrailerDirectly}
        />
      )}
    </div>
  );
}

