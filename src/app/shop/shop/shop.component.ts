import { RestService } from './../../services/rest.service';
import { PageEvent } from '@angular/material/paginator';
import { Cart } from './../../models/cart.model';
import { Category } from './../../models/category.model';
import { Product } from './../../models/product.model';
import { CategoryService } from './../../services/category.service';
import { ProductService } from './../../services/product.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  length;
  pageSize = 2;
  selectedCategory: Category;
  products: Product[];

  @ViewChild(MatPaginator) paginator: PageEvent;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private restService: RestService,
    private cart: Cart
  ) {}
  ngOnInit(): void {
    this.getProducts(null, 0, 2);
  }
  getProducts(
    selectedCategory: Category,
    begin: number,
    end: number
  ): Product[] {
    if (selectedCategory) {
      this.products = this.productService.getProducts(selectedCategory);
      this.length = this.products.length;
      this.products = this.products.slice(begin, end);
    } else {
      this.restService.getProducts().subscribe(
        (response) => {
          this.products = response as Product[];
          this.length = this.products.length;
          if (selectedCategory) {
            this.products = this.products.filter(
              (product) => product.category === selectedCategory
            );
          }
          this.products = this.products.slice(begin, end);
        },
        (error) => {
          console.log('error');
        }
      );
    }
    return this.products;
  }

  get categories(): Category[] {
    return this.categoryService.getCategories();
  }

  addNewProductToCart(product: Product): void {
    this.cart.addItem(product);
  }
  changeCategory(selectedCategory: Category): void {
    this.selectedCategory = selectedCategory;
    this.paginator.pageIndex = 0;
    this.getProducts(selectedCategory, 0, 2);
  }
}
