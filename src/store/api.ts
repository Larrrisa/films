import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (build) => ({
    getFilms: build.query<FilmResponse, void>({
      query: () => ({
        url: `account/21652127`,
        // headers: {
        //   Authorization: 7a58695193555f647cafb130d57bb66a,
        // },
      }),
    }),
  }),
});
