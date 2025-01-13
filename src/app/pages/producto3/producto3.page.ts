import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarroService } from 'src/app/core/services/carro.service';

@Component({
  selector: 'app-producto3',
  templateUrl: './producto3.page.html',
  styleUrls: ['./producto3.page.scss'],
  standalone: false,
 
})
export class Producto3Page {

  quantity: number = 1;

  product = {
    id: 3,
    img: "http://cdn.shopify.com/s/files/1/0549/6638/6775/products/0035__0001_PC205086-Edit_jpg_b243f5e6-e5e3-4397-9cb9-94ab7b325861.jpg?v=1681376642",
    name: 'PC Ryzen level 6',
    price: 1500000,
    stock: 3,
  };

  constructor(private cartService: CarroService, private router:Router) {}

  increment() {
    if (this.quantity < this.product.stock) {
      this.quantity++;
    }
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    this.cartService.addToCart({
      ...this.product,
      quantity: this.quantity,
    });
    alert('Producto agregado al carrito');
  }
  ircarro() {
    this.router.navigate(['/carro']);
  }
}