import { Component, OnInit } from '@angular/core';
import { OrderService, Order } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.refreshOrders();
  }
  changeStatus(orderId) {
    this.orderService.updateNextStatus(orderId)
    this.refreshOrders();
  }
  refreshOrders() {
    this.orders = this.orderService.getOrders();
  }
}
