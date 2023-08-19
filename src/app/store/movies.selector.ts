import { createSelector } from "@ngrx/store";
import { MoviesState } from './movies.reducer';
import { Movie } from "./movies";

export const MoviesSelector = createSelector(
    (state: MoviesState) => state.movies,
    (movies: ReadonlyArray<Movie>) => movies
)
