import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-select',
  templateUrl: './quantity-select.component.html',
  styleUrls: ['./quantity-select.component.scss']
})
export class QuantitySelectComponent {
  quantityOptions: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  @Input() label: string = "";
  @Input() selectedQuantity: string = "1";
  @Output() selectQuantity = new EventEmitter()
}
