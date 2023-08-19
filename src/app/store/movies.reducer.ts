import { createReducer, on } from "@ngrx/store";
import { ADD_MOVIE_SUCCESS, GET_MOVIE_SUCCESS_LIST } from "./movies.action";
import { Movie } from "./movies";

export interface MoviesState {
    movies: ReadonlyArray<Movie>;
}
const initialState: ReadonlyArray<Movie> = [];

export const MoviesReducer = createReducer(
    initialState,
    on(GET_MOVIE_SUCCESS_LIST, (state, { movies }) => [...movies]),
    on(ADD_MOVIE_SUCCESS, (state, { movie }) => [...state, movie])
);

