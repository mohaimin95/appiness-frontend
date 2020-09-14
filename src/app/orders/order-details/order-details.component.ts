import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService, Order } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService
  ) { }
  orderId: string;
  order: Order;
  ngOnInit(): void {
    this.orderId = this.activatedRoute.snapshot.params['orderId'] || null;
    this.getOrderDetails();
  }
  getOrderDetails() {
    this.order = this.orderService.getOrder(this.orderId);
  }
  changeStatus(orderId) {
    this.orderService.updateNextStatus(orderId);
    this.getOrderDetails();
  }

}
