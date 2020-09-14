import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  menu = {
    "1":{
      name:"Peri Peri Chicken Pizza",
      photo:"https://pbs.twimg.com/media/CdveR4XW4AAwy42.jpg",
      price:499
    },
    "2":{
      name:"Aussies Chicken Pizza",
      photo:"https://i.pinimg.com/originals/0a/1e/09/0a1e090ff2e8aff21218cae585f12f86.jpg",
      price:599
    },
    "3":{
      name:"Veg Cheese Pizza",
      photo:"https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2012/04/veg-pizza-recipe-1.jpg",
      price:299
    },
    "4":{
      name:"Thandoori Chicken Pizza",
      photo:"https://i2.wp.com/www.pepperdelight.com/wp-content/uploads/2016/06/pepper-delight-tandoori-chicken-pizza-3.jpg?resize=3728%2C3696",
      price:399
    },
  }
  orders:Order[] = [
    {
      _id:1,
      customerName:"Bob",
      address:"BTM Layout, Bangalore",
      items:["1",'1','2'],
      total:0,
      quantity:0,
      status:"Order Received"
    },
    
    {
      _id:2,
      customerName:"Alice",
      address:"Adugodi, Bangalore",
      items:["2",'2','3'],
      total:0,
      quantity:0,
      status:OrderStatus["Order Received"],
    },
    {
      _id:3,
      customerName:"Eric",
      address:"Electronic city, Bangalore",
      items:["3",'3','4'],
      total:0,
      quantity:0,
      status:OrderStatus["Order Received"],
    },
    {
      _id:4,
      customerName:"Hannah Baker",
      address:"Hoyasala Nagar, Bangalore",
      items:["4",'4','1'],
      total:0,
      quantity:0,
      status:OrderStatus["Order Received"],
    },
    {
      _id:5,
      customerName:"Michael Scoffield",
      address:"Marathalli, Bangalore",
      items:['1','2','3','4'],
      total:0,
      quantity:0,
      status:OrderStatus["Order Received"],
    },
    
    {
      _id:6,
      customerName:"Billy",
      address:"Banaswadi, Bangalore",
      items:['1','4'],
      total:0,
      quantity:0,
      status:OrderStatus["Order Received"],
    },

  ]
  constructor() { }
  getOrders():Order[] {
    let orders = JSON.parse(JSON.stringify(this.orders));
    return orders.map(order=>{
      order.items = order.items.map(itemId=>this.menu[itemId]);
      order.quantity = order.items.length;
      order.total = order.items.reduce((acc,curr)=>acc+curr['price'],0);
      return order;
    })
  }
  getOrder(orderId) {
    let orderIndex = this.orders.findIndex(order=>order._id===+(orderId));
    if(orderIndex>=0) {
      let order = JSON.parse(JSON.stringify(this.orders[orderIndex]));
      order.items = order.items.map(itemId=>this.menu[itemId]);
      order.quantity = order.items.length;
      order.total = order.items.reduce((acc,curr)=>acc+curr['price'],0);
      return order;
    } else {
      return null;
    }
  }
  updateOrder(orderId,data) {
    let orderIndex = this.orders.findIndex(order=>order._id===orderId);
    if(orderIndex>=0) {
      this.orders[orderIndex] = {
        ...this.orders[orderIndex],
        ...data,
        _id:this.orders[orderIndex]._id
      };
      return this.orders[orderIndex];
    } else {
      return null;
    }
  }
  updateNextStatus(orderId) {
    let orderIndex = this.orders.findIndex(order=>order._id===orderId);
    if(orderIndex>=0) {
      this.orders[orderIndex] = {
        ...this.orders[orderIndex],
        status:this.getNextStatus(this.orders[orderIndex].status)
      };
      return this.orders[orderIndex];
    } else {
      return null;
    }

  }
  getNextStatus(status) {
    switch (status.toLowerCase()) {
      case 'order received':
        return 'Preparing'
        break;
  
      case 'preparing':
        return 'Ready to Serve'
        break;
  
      default:
        return status;
        break;
    }
  }
}
enum OrderStatus {
  "Order Received"="Order Received",
  "Preparing"="Preparing",
  "Ready to Serve"="Ready to Serve",
}

export interface Item {
  itemName:string,
  price:number
}

export interface Order {
  _id:number,
  customerName:string,
  address:string,
  items:string[],
  quantity:number,
  total:number,
  status:string,
}