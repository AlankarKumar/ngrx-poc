import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShopState } from './shop.state';

export const shop = createFeatureSelector<ShopState>('shop');

export const loadedItems = createSelector(shop, (state) => state.items);
