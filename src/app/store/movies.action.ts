import { createAction, props } from "@ngrx/store";
import { Movie } from "./movies";

export const ActionTypes = {
    GetMovieList: '[Movie] Get Movie List',
    GetMovieListSuccess: '[Movie] Get Movie List Success',
    AddMovie: '[Movie] Add Movie',
    AddMovieSuccess: '[Movie] Add Movie Success',
};

export const GET_MOVIE_LIST = createAction(
    ActionTypes.GetMovieList
);

export const GET_MOVIE_LIST_SUCCESS = createAction(
    ActionTypes.GetMovieListSuccess,
    props<{ movies: ReadonlyArray<Movie> }>()
);

export const ADD_MOVIE = createAction(
    ActionTypes.AddMovie,
    (movie: Movie) => ({ movie })
);

export const ADD_MOVIE_SUCCESS = createAction(
    ActionTypes.AddMovieSuccess,
    (movie: Movie) => ({ movie })
);
