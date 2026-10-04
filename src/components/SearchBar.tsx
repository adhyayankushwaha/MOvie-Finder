import React from 'react';
import { Search, X, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { SortOption, TimeWindow } from '../types/movie';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
  timeWindow: TimeWindow;
  setTimeWindow: (tw: TimeWindow) => void;
  showTimeWindowToggle?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  timeWindow,
  setTimeWindow,
  showTimeWindowToggle = true,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 my-6">
      {/* Search Input */}
      <div className="relative flex-1 min-w-[240px]">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by title, actor, or keyword..."
          className="w-full rounded-xl border border-neutral-800 bg-neutral-900/90 pl-10 pr-9 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 transition-colors"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* Controls: Time window + Sort By */}
      <div className="flex items-center gap-2 self-end sm:self-auto w-full sm:w-auto">
        {showTimeWindowToggle && !searchQuery && (
          <div className="flex items-center rounded-xl border border-neutral-800 bg-neutral-900/90 p-1">
            <button
              onClick={() => setTimeWindow('day')}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                timeWindow === 'day'
                  ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Today
            </button>
            <button
              onClick={() => setTimeWindow('week')}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                timeWindow === 'week'
                  ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              This Week
            </button>
          </div>
        )}

        <div className="relative flex-1 sm:flex-initial">
          <div className="flex items-center gap-1.5 rounded-xl border border-neutral-800 bg-neutral-900/90 px-3 py-2 text-xs font-medium text-neutral-300">
            <ArrowUpDown className="h-3.5 w-3.5 text-neutral-400" />
            <span className="hidden md:inline text-neutral-500">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-transparent text-neutral-200 text-xs focus:outline-none cursor-pointer pr-2"
            >
              <option value="popularity.desc" className="bg-neutral-900 text-neutral-200">
                Most Popular
              </option>
              <option value="vote_average.desc" className="bg-neutral-900 text-neutral-200">
                Highest Rated
              </option>
              <option value="primary_release_date.desc" className="bg-neutral-900 text-neutral-200">
                Newest Release
              </option>
              <option value="title.asc" className="bg-neutral-900 text-neutral-200">
                Title (A-Z)
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
