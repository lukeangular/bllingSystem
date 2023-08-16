import { createReducer,on } from "@ngrx/store";
import { addFood, getFoodList } from "./foods.action";

export interface FoodsStae{
    data: ReadonlyArray<any>
}

const initialSate : ReadonlyArray<any> = [];

export const FoodsReducer = createReducer(
    initialSate,
    on(getFoodList, (state)=> [...state]),
    on(addFood, (state, food)=> [...state, food])
)