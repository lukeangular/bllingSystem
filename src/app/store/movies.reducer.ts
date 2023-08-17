import { createReducer, on } from "@ngrx/store";
import { ADD_MOVIE, ADD_MOVIE_SUCCESS, GET_MOVIE_LIST, GET_MOVIE_LIST_SUCCESS } from "./movies.action";
import { Movie } from "./movies";

export interface MoviesState {
    movies: ReadonlyArray<Movie>;
}

const initialState: ReadonlyArray<Movie> = [];

export const MoviesReducer = createReducer(
    initialState,
    on(GET_MOVIE_LIST_SUCCESS, (state, { movies }) => [...movies]),
    on(ADD_MOVIE_SUCCESS, (state, { movies }) => [...state, movies])
);
