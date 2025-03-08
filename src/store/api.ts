import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FilmsResponse, SeriesResponse } from "../types/types";

export const filmsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (build) => ({
    getFilms: build.query<FilmsResponse, void>({
      query: () => ({
        url: `/movie/popular`,
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      }),
    }),
    getSeries: build.query<SeriesResponse, void>({
      query: () => ({
        url: `/tv/popular`,
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      }),
    }),
  }),
});

export const { useGetFilmsQuery, useGetSeriesQuery } = filmsApi;
