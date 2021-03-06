import { createAction, props } from '@ngrx/store';
import { Item } from '../models/items.model';

export const itemLoadSuccess = createAction(
  '[Shop Page] Item Load Success',
  props<{ items: Item[] }>()
);

export const itemLoad = createAction(
  '[Shop Page] Item Load',
  props<{ items: [] }>()
);
