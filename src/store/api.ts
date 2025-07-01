import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Film, FilmsResponse, ShowsResponse } from "../types/types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
      );
      return headers;
    },
  }),
  endpoints: (build) => ({
    getFilm: build.query<Film, number>({
      query: (movie_id) => `/movie/${movie_id}`,
    }),
    getFilms: build.query<FilmsResponse, number>({
      query: (page) => `/movie/popular?page=${page}`,
    }),
    getShows: build.query<ShowsResponse, number>({
      query: (page) => `/tv/popular?page=${page}`,
    }),
    getTrendingFilms: build.query<FilmsResponse, void>({
      query: () => `/trending/movie/day`,
    }),
    getByKeyword: build.query<FilmsResponse, string>({
      query: (keyword) => `/search/multi?query=${keyword}`,
    }),
  }),
});

export const {
  useGetFilmsQuery,
  useGetShowsQuery,
  useGetFilmQuery,
  useGetTrendingFilmsQuery,
  useGetByKeywordQuery,
} = api;
