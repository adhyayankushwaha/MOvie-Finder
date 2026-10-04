import React from 'react';
import { Genre } from '../types/movie';
import { Layers } from 'lucide-react';

interface GenreFilterProps {
  genres: Genre[];
  selectedGenreId: number | null;
  onSelectGenre: (genreId: number | null) => void;
}

export const GenreFilter: React.FC<GenreFilterProps> = ({
  genres,
  selectedGenreId,
  onSelectGenre,
}) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-amber-500" />
          <h2 className="text-sm font-semibold tracking-wide text-neutral-300 uppercase">
            Browse by Genre
          </h2>
        </div>
        {selectedGenreId !== null && (
          <button
            onClick={() => onSelectGenre(null)}
            className="text-xs text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-4"
          >
            Clear Filter
          </button>
        )}
      </div>

      {/* Segmented Interactive Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-transparent">
        <button
          onClick={() => onSelectGenre(null)}
          className={`whitespace-nowrap shrink-0 rounded-lg px-3.5 py-2 text-xs font-medium transition-all ${
            selectedGenreId === null
              ? 'bg-amber-500 text-neutral-950 font-semibold shadow-md shadow-amber-500/20'
              : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200'
          }`}
        >
          All Genres
        </button>

        {genres.map((genre) => {
          const isSelected = selectedGenreId === genre.id;
          return (
            <button
              key={genre.id}
              onClick={() => onSelectGenre(isSelected ? null : genre.id)}
              className={`whitespace-nowrap shrink-0 rounded-lg px-3.5 py-2 text-xs font-medium transition-all ${
                isSelected
                  ? 'bg-amber-500 text-neutral-950 font-semibold shadow-md shadow-amber-500/20'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200'
              }`}
            >
              {genre.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
