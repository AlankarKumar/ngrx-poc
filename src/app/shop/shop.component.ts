import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './models/items.model';
import { ShoppingService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  items$: Observable<Array<Item>>;

  constructor(private shopping: ShoppingService) {}

  ngOnInit(): void {
    this.items$ = this.shopping.getItems();
  }
}
