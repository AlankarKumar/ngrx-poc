import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ShoppingService } from './shop.service';
import { EffectsModule } from '@ngrx/effects';
import { ShopEffects } from './store/shop.effects';
import { StoreModule } from '@ngrx/store';
import * as fromShop from './store/shop.reducers';

@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ShopRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('shop', fromShop.shopReducer),
    EffectsModule.forFeature([ShopEffects]),
  ],
  providers: [ShoppingService],
})
export class ShopModule {}
