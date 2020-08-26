import { Order } from './../models/order.model';
import { RestService } from './rest.service';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {
  orders: Order[];
  constructor(private restService: RestService) {}
  getOrders(): Order[] {
    return this.orders;
  }

  save(order: Order) {
    return this.restService.saveOrder(order);
  }
}
