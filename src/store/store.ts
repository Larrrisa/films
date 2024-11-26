import { configureStore } from "@reduxjs/toolkit";
import { filmsApi } from "./api";

export const store = configureStore({
  reducer: { [filmsApi.reducerPath]: filmsApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
