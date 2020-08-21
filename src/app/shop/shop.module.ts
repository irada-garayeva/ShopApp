import { ShopRoutingModule } from './shop-routing.routing';
import { DialogComponent } from './../layout/dialog/dialog.component';
import { MainNavComponent } from '../layout/main-nav/main-nav.component';
import { ServiceModule } from './../services/service.module';
import { NgModule } from '@angular/core';
import { ShopComponent } from './shop/shop.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  imports: [
    CommonModule,
    ServiceModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    FormsModule,
    ShopRoutingModule
  ],
  declarations: [ShopComponent, MainNavComponent, DialogComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
  exports: [ShopComponent],
})
export class ShopModule {}
