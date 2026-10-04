import React from 'react';
import { Film, Bookmark, Key } from 'lucide-react';

interface NavbarProps {
  activeTab: 'trending' | 'genres' | 'discover' | 'watchlist';
  setActiveTab: (tab: 'trending' | 'genres' | 'discover' | 'watchlist') => void;
  watchlistCount: number;
  onOpenApiKeyModal: () => void;
  isLiveApi: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  watchlistCount,
  onOpenApiKeyModal,
  isLiveApi,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text wordmark */}
        <button
          onClick={() => setActiveTab('trending')}
          className="group flex items-center gap-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
            <Film className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-display">
            CineScope
          </span>
        </button>

        {/* Zone 2: Clean 4 nav text links with active underlines */}
        <nav className="hidden sm:flex items-center gap-8 text-sm font-medium">
          <button
            onClick={() => setActiveTab('trending')}
            className={`transition-colors py-1 relative ${
              activeTab === 'trending'
                ? 'text-white'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Trending
            {activeTab === 'trending' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('genres')}
            className={`transition-colors py-1 relative ${
              activeTab === 'genres'
                ? 'text-white'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Genres
            {activeTab === 'genres' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('discover')}
            className={`transition-colors py-1 relative ${
              activeTab === 'discover'
                ? 'text-white'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Search & Browse
            {activeTab === 'discover' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('watchlist')}
            className={`transition-colors py-1 relative flex items-center gap-1.5 ${
              activeTab === 'watchlist'
                ? 'text-white'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Watchlist
            {watchlistCount > 0 && (
              <span className="text-xs font-semibold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 tabular-nums">
                {watchlistCount}
              </span>
            )}
            {activeTab === 'watchlist' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
            )}
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <div
            className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/80 px-3 py-1.5 text-xs font-medium text-neutral-300"
            title={isLiveApi ? 'Connected to live TMDB API' : 'Using high-fidelity movie catalog'}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                isLiveApi ? 'bg-emerald-500 shadow-sm shadow-emerald-500/50' : 'bg-amber-500/80'
              }`}
            />
            <span className="hidden md:inline font-mono text-[11px]">
              {isLiveApi ? 'TMDB Live' : 'Preview Catalog'}
            </span>
          </div>

          <button
            onClick={() => setActiveTab('watchlist')}
            className="sm:hidden flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-300"
          >
            <Bookmark className="h-3.5 w-3.5 text-amber-500" />
            <span>{watchlistCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
