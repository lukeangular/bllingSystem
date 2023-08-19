import { createAction, props } from "@ngrx/store";
import { Movie } from "./movies";

export const GET_MOVIE_LIST = createAction(
    '[Movie] Get Movie List'
);

export const GET_MOVIE_SUCCESS_LIST = createAction(
    '[Movie] Get Movie Success List',
    props<{ movies: ReadonlyArray<Movie> }>()
);

export const ADD_MOVIE = createAction(
    '[Movie] Add Movie',
    (movie: Movie) => ({ movie })
);

export const ADD_MOVIE_SUCCESS = createAction(
    '[Movie] Add Movie Success',
    (movie: Movie) => ({ movie })
);
