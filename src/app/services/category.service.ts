import { Category } from './../models/category.model';
import { RestService } from './rest.service';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService implements OnInit {
  categories: Category[] = [];

  constructor(private service: RestService) {
    this.service
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit(): void {}

  getCategories(): Category[] {
    return this.categories;
  }

  getCategoryById(id: number): Category {
    return this.categories.find((category) => category.id === id);
  }
}
