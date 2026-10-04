import React, { useState } from 'react';
import { Star, Bookmark, Play, Film, Check } from 'lucide-react';
import { Movie } from '../types/movie';
import { getPosterUrl } from '../data/fallbackMovies';

interface MovieCardProps {
  movie: Movie;
  genresMap: Record<number, string>;
  onSelect: (movie: Movie) => void;
  isWatchlisted: boolean;
  onToggleWatchlist: (e: React.MouseEvent, movie: Movie) => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  genresMap,
  onSelect,
  isWatchlisted,
  onToggleWatchlist,
}) => {
  const [imageError, setImageError] = useState(false);
  const posterUrl = getPosterUrl(movie.poster_path, 'w500');
  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : null;

  // Zero-pill discipline: unboxed genres joined by dots
  const genreNames = movie.genre_ids
    .slice(0, 2)
    .map((id) => genresMap[id])
    .filter(Boolean)
    .join(' · ');

  return (
    <div
      onClick={() => onSelect(movie)}
      className="group relative flex flex-col cursor-pointer rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-900/60 hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
    >
      {/* Poster Media Box with 2:3 Cinematic Ratio */}
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-neutral-950">
        {!imageError && posterUrl ? (
          <img
            src={posterUrl}
            alt={movie.title}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900">
            <Film className="h-10 w-10 text-neutral-600 mb-2" />
            <span className="text-xs font-medium text-neutral-400 line-clamp-2">{movie.title}</span>
          </div>
        )}

        {/* Cinematic gradient scrim on bottom of poster */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

        {/* Quick action top right: Watchlist bookmark button */}
        <button
          onClick={(e) => onToggleWatchlist(e, movie)}
          className={`absolute top-2.5 right-2.5 z-20 flex h-8 w-8 items-center justify-center rounded-lg backdrop-blur-md transition-all ${
            isWatchlisted
              ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/30'
              : 'bg-neutral-900/80 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-700/60'
          }`}
          title={isWatchlisted ? 'Remove from Watchlist' : 'Add to Watchlist'}
        >
          {isWatchlisted ? <Check className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
        </button>

        {/* Quick hover trigger overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-neutral-950 shadow-xl shadow-amber-500/40 transform scale-90 group-hover:scale-100 transition-transform">
            <Play className="h-5 w-5 fill-neutral-950 ml-0.5" />
          </div>
        </div>
      </div>

      {/* Card Info Container */}
      <div className="flex flex-1 flex-col p-4">
        {/* Unboxed Metadata Line (No Pill Enclosures) */}
        <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1.5 font-medium">
          <div className="flex items-center gap-1 text-amber-400">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="tabular-nums font-semibold">{movie.vote_average.toFixed(1)}</span>
          </div>

          {releaseYear && (
            <>
              <span className="text-neutral-600" aria-hidden="true">·</span>
              <span className="tabular-nums">{releaseYear}</span>
            </>
          )}

          {genreNames && (
            <>
              <span className="text-neutral-600" aria-hidden="true">·</span>
              <span className="truncate text-neutral-400">{genreNames}</span>
            </>
          )}
        </div>

        {/* Primary Title */}
        <h3 className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors line-clamp-1 font-display">
          {movie.title}
        </h3>

        {/* Quiet Overview Teaser */}
        <p className="mt-1 line-clamp-2 text-xs text-neutral-400 leading-relaxed">
          {movie.overview || 'No synopsis available.'}
        </p>
      </div>
    </div>
  );
};
