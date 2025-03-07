export interface FilmsResponse {
  page: number;
  results: Film[];
}

export interface Film {
  id: number;
  title: string;
  description?: string;
  vote_average?: number;
  overview?: string;
  poster_path: string;
}
