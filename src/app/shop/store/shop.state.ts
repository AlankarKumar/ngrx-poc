import { Item } from '../models/items.model';

export interface ShopState {
  items: Item[];
}

export const initialShopState: ShopState = {
  items: [],
};
