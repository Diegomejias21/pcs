import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-productos-input',
  templateUrl: './productos-input.component.html',
  styleUrls: ['./productos-input.component.scss'],
})
export class ProductosInputComponent {
  product = { name: '', price:  '', stock: 0  };

  @Output() addProduct = new EventEmitter<{ name: string, price: string, stock: number }>();

  constructor() { }

  addproduct() {
    if (this.product.name && this.product.price && this.product.stock > 0) {
      this.addProduct.emit(this.product);
      this.product = { name: '', price: '', stock: 0 };
    }
  }

}
