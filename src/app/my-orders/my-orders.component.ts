import { Observable } from 'rxjs/Rx';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  orders$;

  constructor(
    private orderService: OrderService,
    private authService: AuthService) {

    this.orders$ = this.authService.user$.switchMap(u => orderService.getOrdersByUser(u.uid));
  }
}
