import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ShopRoutingModule } from './shop-routing.routing';
import { DialogComponent } from './../layout/dialog/dialog.component';
import { ServiceModule } from './../services/service.module';
import { NgModule } from '@angular/core';
import { ShopComponent } from './shop/shop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CustomPaginator } from '../models/CustomPaginatorConfiguration';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  imports: [
    CommonModule,
    ServiceModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    ShopRoutingModule
  ],
  declarations: [ShopComponent, DialogComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
  exports: [ShopComponent],
  providers: [ { provide: MatPaginatorIntl, useValue: CustomPaginator() }]
})
export class ShopModule {}
