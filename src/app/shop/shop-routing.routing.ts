import { MainNavComponent } from './../layout/main-nav/main-nav.component';
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: MainNavComponent,
    children: [
      {
        path: '',
        component: ShopComponent,
      },
      {
        path: 'shop',
        redirectTo: '',
      },
      {
        path: 'shop/checkout',
        component: CheckoutComponent,
      },
      {
        path: 'shop/cartdetail',
        component: CartDetailComponent,
      },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
