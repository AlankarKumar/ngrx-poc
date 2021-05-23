import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from './models/items.model';

@Injectable()
export class ShoppingService {
  constructor(private http: HttpClient) {}

  getItems(): Observable<Array<Item>> {
    return this.http
      .get<Array<Item>>('https://fakestoreapi.com/products')
      .pipe(map((response) => [...response]));
  }
}
