import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FilmsResponse, SeriesResponse, Film } from "../types/types";

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
    getFilms: build.query<FilmsResponse, void>({
      query: () => `/movie/popular`,
    }),
    getSeries: build.query<SeriesResponse, void>({
      query: () => `/tv/popular`,
    }),
  }),
});

export const { useGetFilmsQuery, useGetSeriesQuery, useGetFilmQuery } = api;
