import { createReducer, on } from '@ngrx/store';
import { itemLoadSuccess } from './shop.actions';
import { initialShopState } from './shop.state';

export const shopReducer = createReducer(
  initialShopState,
  on(itemLoadSuccess, (state, action) => {
    return {
      ...state,
      items: action.items,
    };
  })
);
