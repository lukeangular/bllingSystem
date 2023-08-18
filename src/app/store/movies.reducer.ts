import { createReducer, on } from "@ngrx/store";
import { ADD_MOVIE_SUCCESS, GET_MOVIE_LIST_SUCCESS } from "./movies.action";
import { Movie } from "./movies";

export interface MoviesState {
    movies: ReadonlyArray<Movie>;
}

const initialState: MoviesState = {
    movies: []
};

export const MoviesReducer = createReducer(
    initialState,
    on(GET_MOVIE_LIST_SUCCESS,
        (state, { movies }) => ({ ...state, movies: [...movies] })
    ),
    on(ADD_MOVIE_SUCCESS,
        (state, { movie }) => ({ ...state, movies: [...state.movies, movie] })
    )
);
