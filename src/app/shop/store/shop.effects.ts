import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { ShoppingService } from '../shop.service';
import * as fromShopActions from './shop.actions';

@Injectable()
export class ShopEffects {
  loadItems$ = createEffect(() =>
    this.action.pipe(
      ofType(fromShopActions.itemLoad),
      mergeMap(() =>
        this.shop.getItems().pipe(
          map((items) => ({
            type: '[Shop Page] Item Load Success',
            items: items,
          })),
          catchError(() => of({ type: '[Shop Page] Item Load' }))
        )
      )
    )
  );

  constructor(private action: Actions, private shop: ShoppingService) {}
}
