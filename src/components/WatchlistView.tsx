import React from 'react';
import { Bookmark, Trash2, Film, Star, Play } from 'lucide-react';
import { Movie } from '../types/movie';
import { getPosterUrl } from '../data/fallbackMovies';

interface WatchlistViewProps {
  watchlist: Movie[];
  onSelectMovie: (movie: Movie) => void;
  onRemoveFromWatchlist: (e: React.MouseEvent, movie: Movie) => void;
  onClearWatchlist: () => void;
  onBrowseTrending: () => void;
  genresMap: Record<number, string>;
}

export const WatchlistView: React.FC<WatchlistViewProps> = ({
  watchlist,
  onSelectMovie,
  onRemoveFromWatchlist,
  onClearWatchlist,
  onBrowseTrending,
  genresMap,
}) => {
  return (
    <div className="w-full py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-800 gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <Bookmark className="h-5 w-5 text-amber-500" />
            <h1 className="text-2xl sm:text-3xl font-bold text-white font-display">
              My Watchlist
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            {watchlist.length} {watchlist.length === 1 ? 'title' : 'titles'} saved to watch
          </p>
        </div>

        {watchlist.length > 0 && (
          <button
            onClick={onClearWatchlist}
            className="flex items-center gap-1.5 self-start sm:self-auto rounded-lg border border-neutral-800 bg-neutral-900/60 px-3.5 py-2 text-xs font-medium text-rose-400 hover:bg-rose-500/10 hover:border-rose-500/30 transition-colors"
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span>Clear Watchlist</span>
          </button>
        )}
      </div>

      {/* Empty State */}
      {watchlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center rounded-3xl border border-neutral-800/80 bg-neutral-900/30 p-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 mb-4">
            <Film className="h-8 w-8" />
          </div>
          <h2 className="text-xl font-semibold text-white font-display">
            Your Watchlist is empty
          </h2>
          <p className="mt-2 text-sm text-neutral-400 max-w-md">
            Save films you want to watch later by clicking the bookmark icon on any movie card or in the movie details modal.
          </p>
          <button
            onClick={onBrowseTrending}
            className="mt-6 rounded-xl bg-amber-500 px-5 py-2.5 text-xs font-semibold text-neutral-950 hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
          >
            Explore Trending Films
          </button>
        </div>
      ) : (
        /* Watchlist Grid */
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {watchlist.map((movie) => {
            const posterUrl = getPosterUrl(movie.poster_path, 'w500');
            const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : null;
            const genres = movie.genre_ids
              .slice(0, 2)
              .map((id) => genresMap[id])
              .filter(Boolean)
              .join(' · ');

            return (
              <div
                key={movie.id}
                onClick={() => onSelectMovie(movie)}
                className="group relative flex flex-col rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-900/60 hover:border-neutral-700 hover:bg-neutral-900 transition-all cursor-pointer hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[2/3] w-full bg-neutral-950 overflow-hidden">
                  {posterUrl ? (
                    <img
                      src={posterUrl}
                      alt={movie.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center p-4 text-center">
                      <Film className="h-8 w-8 text-neutral-600" />
                    </div>
                  )}

                  {/* Remove Button */}
                  <button
                    onClick={(e) => onRemoveFromWatchlist(e, movie)}
                    className="absolute top-2.5 right-2.5 z-20 flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900/90 text-rose-400 hover:bg-rose-500 hover:text-white transition-colors border border-neutral-700/60"
                    title="Remove from Watchlist"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>

                  {/* Hover Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-neutral-950 shadow-lg">
                      <Play className="h-5 w-5 fill-neutral-950 ml-0.5" />
                    </div>
                  </div>
                </div>

                <div className="p-3.5 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1 font-medium">
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      <span className="tabular-nums">{movie.vote_average.toFixed(1)}</span>
                    </div>
                    {releaseYear && (
                      <>
                        <span className="text-neutral-600">·</span>
                        <span className="tabular-nums">{releaseYear}</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-xs font-semibold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                    {movie.title}
                  </h3>
                  {genres && (
                    <p className="text-[11px] text-neutral-500 truncate mt-0.5">
                      {genres}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
