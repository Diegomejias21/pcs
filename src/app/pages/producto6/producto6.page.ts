import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarroService } from 'src/app/core/services/carro.service';

@Component({
  selector: 'app-producto6',
  templateUrl: './producto6.page.html',
  styleUrls: ['./producto6.page.scss'],
  standalone: false,
 
})
export class Producto6Page {

  quantity: number = 1;

  product = {
    id: 6,
    img: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/130171593_01/w=1500,h=1500,fit=pad",
    name: 'NPC Gamer purple',
    price: 992520,
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