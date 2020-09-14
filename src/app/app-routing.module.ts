import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersModule } from './orders/orders.module';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:"orders",
    loadChildren:"./orders/orders.module#OrdersModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
