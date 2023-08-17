import { createAction, props } from "@ngrx/store";
import { Movie } from "./movies";

export const GET_MOVIE_LIST  = createAction(
    '[Movie] get movie list'
)
export const GET_MOVIE_LIST_SUCCESS  = createAction(
    '[Movie] get movie list success',
    props<{ movies: ReadonlyArray<Movie> }>()
)
export const ADD_MOVIE  = createAction(
    '[Movie] add movie',
    (data : Movie )=> data
)
export const ADD_MOVIE_SUCCESS  = createAction(
    '[Movie] add movie success',
    props<{movies: Movie}>()
)
