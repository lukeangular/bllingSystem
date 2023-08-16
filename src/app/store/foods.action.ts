import { createAction, props } from "@ngrx/store";

export const GET_FOOD_LIST  = createAction(
    '[Food] get food list',
    props<{ data: any }>()
)
export const GET_FOOD_LIST_SUCCESS  = createAction(
    '[Food] get food list success',
    props<{ foods: ReadonlyArray<any> }>() 
)
export const ADD_FOOD  = createAction(
    '[Food] add food',
    (data : any )=> data
)
export const ADD_FOOD_SUCCESS  = createAction(
    '[Food] add food success',
    (data : any )=> data
)
