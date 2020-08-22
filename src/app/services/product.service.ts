import { Observable, Subscribable } from 'rxjs';
import { Category } from './../models/category.model';
import { Product } from './../models/product.model';
import { RestService } from './rest.service';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];
  constructor(private service: RestService) {
    this.service
      .getProducts()
      .subscribe((products) => (this.products = products as Product[]));
  }

  getProducts(category: Category = null): Product[] {
    if (category) {
      return this.products.filter((product) => product.category === category);
    } else {
      return this.products;
    }
  }
  getProductById(id: number): Product {
    return this.products.find((product) => product.id === id);
  }
}
