import { createReducer, on } from "@ngrx/store";
import { ADD_FOOD, GET_FOOD_LIST_SUCCESS } from "./foods.action";

export interface FoodsState {
    data: ReadonlyArray<any>;
}

const initialState: FoodsState = {
    data: [],
};

export const FoodsReducer = createReducer(
    initialState,
    on(GET_FOOD_LIST_SUCCESS, (state, action) => ({
        ...state,
        data: action.foods,
    })),
    on(ADD_FOOD, (state, { data }) => ({
        ...state,
        data: [...state.data, data],
    }))
);
