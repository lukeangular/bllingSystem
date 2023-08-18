import { createSelector, createFeatureSelector } from "@ngrx/store";
import { MoviesState } from './movies.reducer';

const selectFoodsFeature = createFeatureSelector<MoviesState>('movies');

export const selectMovieList = createSelector(
    selectFoodsFeature,
    state => state.movies
);

