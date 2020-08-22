import { PageEvent, MatPaginatorIntl } from '@angular/material/paginator';
import { Cart } from './../../models/cart.model';
import { Category } from './../../models/category.model';
import { Product } from './../../models/product.model';
import { CategoryService } from './../../services/category.service';
import { ProductService } from './../../services/product.service';
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  length;
  pageSize = 2;
  selectedCategory: Category;
  pageEvent: PageEvent;

  @ViewChild(MatPaginator) paginator: PageEvent;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private cart: Cart
  ) {}
  getProducts(selectedCategory: Category): Product[] {
    this.selectedCategory = selectedCategory;
    const products = this.productService.getProducts(selectedCategory);
    this.length = products.length;
    return products;
  }

  get categories(): Category[] {
    return this.categoryService.getCategories();
  }

  addNewProductToCart(product: Product): void {
    this.cart.addItem(product);
  }
  changeCategory(selectedCategory: Category): void {
    this.getProducts(selectedCategory);
    this.paginator.pageIndex = 0;
  }
}
