import { Cart } from './../../models/cart.model';
import { Category } from './../../models/category.model';
import { Product } from './../../models/product.model';
import { CategoryService } from './../../services/category.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  selectedCategory: Category;
  pageLength = 0;
  splicedData: Product[];
  pageSize = 2;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private cart: Cart
  ) {}

  ngOnInit(): void {
    this.splicedData = this.productService.getProducts(this.selectedCategory);
  }

  getProducts(selectedCategory: Category): Product[] {
    this.pageLength = this.productService.getProducts(selectedCategory).length;
    return this.splicedData;
  }

  get categories(): Category[] {
    return this.categoryService.getCategories();
  }

  addNewProductToCart(product: Product): void {
    this.cart.addItem(product);
  }

  pageChangeEvent(event): void {
    const offset = (event.pageIndex + 1 - 1) * event.pageSize;
    this.splicedData = this.getProducts(this.selectedCategory)
      .slice(offset)
      .slice(0, event.pageSize);
  }
}
