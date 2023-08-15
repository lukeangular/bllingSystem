
import { createFeatureSelector } from '@ngrx/store';
import { Foods } from './foods';

export const FoodsSelector = createFeatureSelector<Foods[]>('myfoods');