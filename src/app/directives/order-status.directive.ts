import { Directive, HostBinding, Input, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appOrderStatus]'
})
export class OrderStatusDirective implements OnChanges {
  @HostBinding('class') className = "";
  @Input() appOrderStatus;
  constructor(el: ElementRef) {


  }
  ngOnChanges() {
    this.className = this.getClassName(this.appOrderStatus);

  }
  getClassName(status: string): string {
    switch (status.toLowerCase()) {
      case 'order received':
        return 'badge-info'
        break;

      case 'preparing':
        return 'badge-warning'
        break;
      case 'ready to serve':
        return 'badge-success'
        break;

      default:
        return 'badge-primary'
        break;
    }
  }
}
