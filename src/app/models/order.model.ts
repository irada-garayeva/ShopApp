import { Cart } from './cart.model';
import { Injectable } from '@angular/core';

@Injectable()

export class Order {
  public id: number;
  public name: string;
  public address: string;
  public city: string;
  public email: string;
  public phoneNumber: string;

  public isSent: boolean;

  constructor(public cart: Cart) {}
}
