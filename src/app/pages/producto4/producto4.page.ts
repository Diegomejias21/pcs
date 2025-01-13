import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarroService } from 'src/app/core/services/carro.service';

@Component({
  selector: 'app-producto4',
  templateUrl: './producto4.page.html',
  styleUrls: ['./producto4.page.scss'],
  standalone: false,
})
export class Producto4Page {

  quantity: number = 1;

  product = {
    id: 4,
    img: "https://c.shld.net/rpx/i/s/i/spin/10130172/prod_18899955412??hei=64&wid=64&qlt=50",
    name: 'PC Cybertron gamer',
    price: 1200000,
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