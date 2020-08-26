import { Order } from './../models/order.model';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestService {
  baseUrl = 'http://localhost:3500/';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + 'categories');
  }

  getProductsFromVS(offset): Observable<Product[]> {
    if (offset === null) {
      offset = 0;
    }
    return this.http.get<Product[]>(
      'http://localhost:59716/api/weatherforecast/' + `${offset}/${2}`
    );
  }

  saveOrder(order: Order): Observable<Order> {
    console.log(order);
    return this.http.post<Order>(this.baseUrl + 'orders', order);
  }
}
