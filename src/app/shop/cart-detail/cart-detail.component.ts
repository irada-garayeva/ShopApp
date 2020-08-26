import { Cart } from './../../models/cart.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css'],
})
export class CartDetailComponent implements OnInit, OnDestroy {
  cartItemsChangedSub: Subscription;
  displayedColumns: string[] = [
    'imageUrl',
    'name',
    'quantity',
    'price',
    'button',
  ];
  constructor(public cart: Cart) {}
  ngOnDestroy(): void {
    this.cartItemsChangedSub.unsubscribe();
  }
  ngOnInit(): void {
    this.cartItemsChangedSub = this.cart.cartItemsChanged.subscribe(
      (newCartItems) => {
        this.cart.CartItems = newCartItems;
      }
    );
  }
}
