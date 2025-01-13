import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarroService } from 'src/app/core/services/carro.service';


@Component({
  selector: 'app-producto1',
  templateUrl: './producto1.page.html',
  styleUrls: ['./producto1.page.scss'],
  standalone: false,
 
})
export class Producto1Page {
   // Inicializa el contador de cantidad
   quantity: number = 1;

   product = {
     id: 1,
     img: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/133623009_04/w=1500,h=1500,fit=pad",
     name: 'Notebook Gamer MSI Raider',
     price: 1919990,
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
