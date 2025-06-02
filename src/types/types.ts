export interface FilmsResponse {
  page: number;
  results: Film[];
  total_pages: number;
  total_results?: number;
}

export interface ShowsResponse {
  page: number;
  results: Shows[];
  total_pages: number;
  total_results?: number;
}

export interface Film {
  id: number;
  title: string;
  description?: string;
  vote_average?: number;
  overview?: string;
  poster_path: string;
  tagline: string;
  release_date: string;
  homepage: string;
  genres: Genre[];
  type: "film";
}

export interface Shows {
  id: number;
  name: string;
  description?: string;
  vote_average?: number;
  overview?: string;
  poster_path: string;
  type: "series";
}

export interface Genre {
  id: number;
  name: string;
}
