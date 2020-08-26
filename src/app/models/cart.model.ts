import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class Cart {
  CartItems: CartItem[] = [];
  totalQuantity = 0;
  totalPrice = 0;
  cartItemsChanged = new Subject<CartItem[]>();

  addItem(product: Product, quantity: number = 1): void {
    const cartItem = this.CartItems.find(
      (item) => item.product.id === product.id
    );
    if (cartItem !== undefined) {
      this.CartItems.find(
        (item) => item.product.id === product.id
      ).quantity += quantity;
    } else {
      this.CartItems.push(new CartItem(product, quantity));
    }
    this.calculate();
  }

  calculate(): void {
    this.totalQuantity = 0;
    this.totalPrice = 0;
    this.CartItems.forEach((i) => {
      this.totalPrice += i.product.price * i.quantity;
      this.totalQuantity += i.quantity;
    });
  }

  removeItem(id): void {
      const index = this.CartItems.findIndex((item) => item.product.id === id);
      this.CartItems.splice(index, 1);
      this.calculate();
      this.cartItemsChanged.next(this.CartItems.slice());
  }

  clear(): void {
    this.CartItems = [];
    this.calculate();
  }
}

export class CartItem {
  constructor(public product: Product, public quantity) {}
}
