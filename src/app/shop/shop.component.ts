import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from './models/items.model';
import { ShoppingService } from './shop.service';
import { ShopState } from './store/shop.state';
import * as fromShopActions from './store/shop.actions';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  items$: Item[];

  constructor(
    private shopping: ShoppingService,
    private store: Store<{ shop: { items: Item[] } }>
  ) {}

  ngOnInit(): void {
    this.store.subscribe((data) => {
      this.items$ = data.shop.items;
    });
    this.store.dispatch(fromShopActions.itemLoad({ items: [] }));
  }
}
