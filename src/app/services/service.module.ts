import { Order } from './../models/order.model';
import { Cart } from './../models/cart.model';
import { OrderService } from './order.service';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { RestService } from './rest.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    RestService,
    ProductService,
    CategoryService,
    Cart,
    Order,
    OrderService,
  ],
})
export class ServiceModule {}
