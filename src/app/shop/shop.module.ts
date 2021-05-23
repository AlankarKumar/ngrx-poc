import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ShoppingService } from './shop.service';

@NgModule({
  declarations: [ShopComponent],
  imports: [CommonModule, MatCardModule, ShopRoutingModule, HttpClientModule],
  providers: [ShoppingService],
})
export class ShopModule {}
