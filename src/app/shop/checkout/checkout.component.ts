import { Order } from './../../models/order.model';
import { OrderService } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  order: Order;
  orderForm: FormGroup;
  get form() {
    return this.orderForm.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null, [Validators.minLength(3), Validators.required]],
      address: [null, Validators.required],
      city: [null, Validators.required],
    });
  }
  onSubmit(): void {
    if (this.orderForm.valid) {
      
      this.orderService.save(this.order);
    }
  }
}
