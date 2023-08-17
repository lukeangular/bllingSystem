import { createSelector, createFeatureSelector } from "@ngrx/store";
import { MoviesState } from './movies.reducer';

const selectMoviesFeature = createFeatureSelector<MoviesState>('foods');

export const selectFoodList = createSelector(
    selectMoviesFeature,
    state => state.movies
);