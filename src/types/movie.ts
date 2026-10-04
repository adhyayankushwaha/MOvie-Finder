export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  original_title?: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  genre_ids: number[];
  adult?: boolean;
  video?: boolean;
  original_language?: string;
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  order: number;
}

export interface CrewMember {
  id: number;
  name: string;
  job: string;
  department: string;
}

export interface VideoItem {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  official: boolean;
  published_at?: string;
}

export interface MovieDetails extends Movie {
  genres: Genre[];
  runtime: number;
  tagline?: string;
  status?: string;
  budget?: number;
  revenue?: number;
  credits?: {
    cast: CastMember[];
    crew: CrewMember[];
  };
  videos?: {
    results: VideoItem[];
  };
  similar?: {
    results: Movie[];
  };
}

export type SortOption = 'popularity.desc' | 'vote_average.desc' | 'primary_release_date.desc' | 'title.asc';

export type TimeWindow = 'day' | 'week';
