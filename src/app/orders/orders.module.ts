import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderStatusDirective } from '../directives/order-status.directive';
import { OrderDetailsComponent } from './order-details/order-details.component';


@NgModule({
  declarations: [OrderListComponent, OrdersComponent,
    OrderStatusDirective,
    OrderDetailsComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
