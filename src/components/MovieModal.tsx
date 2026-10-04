import React, { useEffect, useState } from 'react';
import { X, Play, Bookmark, Star, Clock, Calendar, Film, DollarSign, Check, Users, Sparkles } from 'lucide-react';
import { Movie, MovieDetails } from '../types/movie';
import { fetchMovieDetails } from '../services/tmdb';
import { getBackdropUrl, getPosterUrl } from '../data/fallbackMovies';

interface MovieModalProps {
  movie: Movie | null;
  onClose: () => void;
  onSelectMovie: (movie: Movie) => void;
  isWatchlisted: boolean;
  onToggleWatchlist: (movie: Movie) => void;
  autoPlayTrailer?: boolean;
}

export const MovieModal: React.FC<MovieModalProps> = ({
  movie,
  onClose,
  onSelectMovie,
  isWatchlisted,
  onToggleWatchlist,
  autoPlayTrailer = false,
}) => {
  const [details, setDetails] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [showTrailer, setShowTrailer] = useState(autoPlayTrailer);

  useEffect(() => {
    if (!movie) {
      setDetails(null);
      setShowTrailer(false);
      return;
    }

    setShowTrailer(autoPlayTrailer);
    let isCancelled = false;
    setLoading(true);

    fetchMovieDetails(movie.id).then((data) => {
      if (!isCancelled) {
        setDetails(data);
        setLoading(false);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [movie, autoPlayTrailer]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!movie) return null;

  // Active movie data (details or base movie)
  const current = details || (movie as Partial<MovieDetails>);

  // Find primary trailer
  const trailer = current.videos?.results?.find(
    (v) => (v.type === 'Trailer' || v.type === 'Teaser') && v.site === 'YouTube'
  ) || current.videos?.results?.[0];

  const backdropUrl = getBackdropUrl(current.backdrop_path || null, 'original');
  const posterUrl = getPosterUrl(current.poster_path || null, 'w500');

  // Format runtime
  const formatRuntime = (minutes?: number) => {
    if (!minutes) return null;
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hrs}h ${mins}m`;
  };

  // Format currency
  const formatMoney = (amount?: number) => {
    if (!amount || amount <= 0) return null;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const director = current.credits?.crew?.find((c) => c.job === 'Director');
  const castList = current.credits?.cast?.slice(0, 8) || [];
  const similarMovies = current.similar?.results?.slice(0, 4) || [];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-4xl rounded-2xl md:rounded-3xl border border-neutral-800 bg-neutral-950 shadow-2xl overflow-hidden text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900/80 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-700/80 backdrop-blur-md transition-colors"
          title="Close (Esc)"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Media Hero Section (Trailer or Backdrop) */}
        <div className="relative aspect-video w-full max-h-[440px] bg-neutral-900">
          {showTrailer && trailer ? (
            <iframe
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&rel=0&modestbranding=1`}
              title={`${current.title} Official Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full border-0"
            />
          ) : (
            <div className="relative h-full w-full overflow-hidden">
              {backdropUrl ? (
                <img
                  src={backdropUrl}
                  alt={current.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center filter brightness-90 contrast-105"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-tr from-neutral-950 via-neutral-900 to-amber-950/30 flex items-center justify-center">
                  <Film className="h-16 w-16 text-neutral-700" />
                </div>
              )}
              {/* Gradient Scrims */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

              {/* Play Trailer Floating Button */}
              {trailer && (
                <button
                  onClick={() => setShowTrailer(true)}
                  className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 text-neutral-950 shadow-2xl shadow-amber-500/50 hover:scale-110 active:scale-95 transition-all"
                  title="Watch Official Trailer"
                >
                  <Play className="h-7 w-7 fill-neutral-950 ml-1" />
                </button>
              )}
            </div>
          )}
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Header Row: Title, Year, Rating, Tagline */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="space-y-1 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {current.title}
              </h2>
              {current.tagline && (
                <p className="text-sm italic text-amber-400/90 font-serif">
                  "{current.tagline}"
                </p>
              )}
              {/* Unboxed Metadata (Zero-Pill Rule) */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-neutral-400 font-medium">
                <div className="flex items-center gap-1 text-amber-400 font-semibold">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="tabular-nums text-sm">{current.vote_average?.toFixed(1)}</span>
                  <span className="text-neutral-500 text-xs">({current.vote_count?.toLocaleString()} votes)</span>
                </div>

                {current.release_date && (
                  <>
                    <span className="text-neutral-600" aria-hidden="true">·</span>
                    <span className="tabular-nums flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-neutral-500" />
                      {new Date(current.release_date).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </>
                )}

                {current.runtime && (
                  <>
                    <span className="text-neutral-600" aria-hidden="true">·</span>
                    <span className="tabular-nums flex items-center gap-1">
                      <Clock className="h-3 w-3 text-neutral-500" />
                      {formatRuntime(current.runtime)}
                    </span>
                  </>
                )}

                {current.genres && current.genres.length > 0 && (
                  <>
                    <span className="text-neutral-600" aria-hidden="true">·</span>
                    <span className="text-neutral-300">
                      {current.genres.map((g) => g.name).join(' · ')}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => onToggleWatchlist(movie)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
                  isWatchlisted
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30'
                    : 'bg-neutral-800 text-neutral-200 border border-neutral-700 hover:bg-neutral-700 hover:text-white'
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

              {trailer && showTrailer && (
                <button
                  onClick={() => setShowTrailer(false)}
                  className="rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2.5 text-xs text-neutral-400 hover:text-neutral-200"
                >
                  Hide Trailer
                </button>
              )}
            </div>
          </div>

          {/* Synopsis */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
              Synopsis
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed max-w-3xl">
              {current.overview || 'No synopsis provided for this title.'}
            </p>
          </div>

          {/* Key Production Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-neutral-800/80 text-xs">
            <div>
              <span className="text-neutral-500 block">Director</span>
              <span className="font-medium text-neutral-200">{director?.name || '—'}</span>
            </div>
            <div>
              <span className="text-neutral-500 block">Original Language</span>
              <span className="font-medium text-neutral-200 uppercase">{current.original_language || 'en'}</span>
            </div>
            <div>
              <span className="text-neutral-500 block">Budget</span>
              <span className="font-medium text-neutral-200 tabular-nums">{formatMoney(current.budget) || '—'}</span>
            </div>
            <div>
              <span className="text-neutral-500 block">Box Office Revenue</span>
              <span className="font-medium text-neutral-200 tabular-nums">{formatMoney(current.revenue) || '—'}</span>
            </div>
          </div>

          {/* Top Billed Cast */}
          {castList.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 mb-3">
                <Users className="h-4 w-4 text-amber-500" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Top Billed Cast
                </h4>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {castList.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center gap-2.5 rounded-xl border border-neutral-800/60 bg-neutral-900/40 p-2"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-800 text-neutral-400 text-xs font-bold overflow-hidden">
                      {member.profile_path ? (
                        <img
                          src={getPosterUrl(member.profile_path, 'w342') || ''}
                          alt={member.name}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        member.name.charAt(0)
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-neutral-200 truncate">{member.name}</p>
                      <p className="text-[11px] text-neutral-500 truncate">{member.character}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Similar Recommended Movies */}
          {similarMovies.length > 0 && (
            <div className="pt-2">
              <div className="flex items-center gap-1.5 mb-3">
                <Sparkles className="h-4 w-4 text-amber-500" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  You Might Also Like
                </h4>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {similarMovies.map((sim) => (
                  <button
                    key={sim.id}
                    onClick={() => onSelectMovie(sim)}
                    className="group flex flex-col text-left rounded-xl border border-neutral-800/80 bg-neutral-900/60 overflow-hidden hover:border-neutral-700 hover:bg-neutral-900 transition-all p-2"
                  >
                    <div className="aspect-[2/3] w-full rounded-lg overflow-hidden bg-neutral-950 mb-2">
                      <img
                        src={getPosterUrl(sim.poster_path, 'w342') || ''}
                        alt={sim.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <span className="text-xs font-medium text-neutral-200 line-clamp-1 group-hover:text-amber-400">
                      {sim.title}
                    </span>
                    <span className="text-[11px] text-neutral-500 tabular-nums">
                      ⭐ {sim.vote_average.toFixed(1)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
