import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarroService } from 'src/app/core/services/carro.service';

@Component({
  selector: 'app-producto5',
  templateUrl: './producto5.page.html',
  styleUrls: ['./producto5.page.scss'],
  standalone: false,
})
export class Producto5Page {

  quantity: number = 1;

  product = {
    id: 5,
    img: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/17099057_1/w=1500,h=1500,fit=pad",
    name: 'Notebook Acer Nitro V15',
    price: 859990,
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