import React from 'react';
import { Play, Bookmark, Star, Info, Check } from 'lucide-react';
import { Movie } from '../types/movie';
import { getBackdropUrl } from '../data/fallbackMovies';

interface HeroFeaturedProps {
  movie: Movie;
  genresMap: Record<number, string>;
  onOpenDetails: (movie: Movie) => void;
  onWatchTrailer: (movie: Movie) => void;
  isWatchlisted: boolean;
  onToggleWatchlist: (movie: Movie) => void;
}

export const HeroFeatured: React.FC<HeroFeaturedProps> = ({
  movie,
  genresMap,
  onOpenDetails,
  onWatchTrailer,
  isWatchlisted,
  onToggleWatchlist,
}) => {
  const backdropUrl = getBackdropUrl(movie.backdrop_path, 'original');
  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : '';
  const movieGenres = movie.genre_ids
    .slice(0, 3)
    .map((id) => genresMap[id])
    .filter(Boolean);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 shadow-2xl mb-12">
      {/* Background Media with Multi-Stop Gradient Scrim */}
      <div className="absolute inset-0">
        {backdropUrl ? (
          <img
            src={backdropUrl}
            alt={movie.title}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover object-center transform scale-105 filter brightness-75 contrast-110"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-tr from-neutral-950 via-neutral-900 to-amber-950/40" />
        )}
        {/* Cinematic Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent w-full md:w-3/4" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-[460px] flex-col justify-end p-6 sm:p-10 lg:p-14 max-w-3xl">
        {/* Unboxed Metadata Line (Zero-Pill Rule) */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-neutral-300 font-medium mb-3">
          <div className="flex items-center gap-1 text-amber-400 font-semibold">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="tabular-nums">{movie.vote_average.toFixed(1)}</span>
            <span className="text-neutral-500 font-normal">/ 10</span>
          </div>

          {releaseYear && (
            <>
              <span className="text-neutral-600" aria-hidden="true">·</span>
              <span className="tabular-nums">{releaseYear}</span>
            </>
          )}

          {movieGenres.length > 0 && (
            <>
              <span className="text-neutral-600" aria-hidden="true">·</span>
              <span>{movieGenres.join(' · ')}</span>
            </>
          )}

          <span className="text-neutral-600" aria-hidden="true">·</span>
          <span className="text-amber-500 font-semibold tracking-wide">TRENDING NOW</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display text-balance mb-3 leading-tight">
          {movie.title}
        </h1>

        {/* Overview */}
        <p className="line-clamp-3 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mb-6">
          {movie.overview}
        </p>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onWatchTrailer(movie)}
            className="flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-amber-400 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/20"
          >
            <Play className="h-4 w-4 fill-neutral-950" />
            <span>Watch Trailer</span>
          </button>

          <button
            onClick={() => onToggleWatchlist(movie)}
            className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
              isWatchlisted
                ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20'
                : 'border-neutral-700 bg-neutral-900/80 text-neutral-200 hover:bg-neutral-800 hover:text-white'
            }`}
          >
            {isWatchlisted ? (
              <>
                <Check className="h-4 w-4 text-emerald-400" />
                <span>In Watchlist</span>
              </>
            ) : (
              <>
                <Bookmark className="h-4 w-4 text-neutral-400" />
                <span>Add to Watchlist</span>
              </>
            )}
          </button>

          <button
            onClick={() => onOpenDetails(movie)}
            className="flex items-center gap-2 rounded-xl border border-neutral-700/80 bg-neutral-900/60 px-4 py-3 text-sm font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white transition-all backdrop-blur-sm"
          >
            <Info className="h-4 w-4 text-neutral-400" />
            <span>Full Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};
