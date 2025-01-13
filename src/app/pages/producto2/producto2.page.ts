import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarroService } from 'src/app/core/services/carro.service';


@Component({
  selector: 'app-producto2',
  templateUrl: './producto2.page.html',
  styleUrls: ['./producto2.page.scss'],
  standalone: false,
})

export class Producto2Page{
  // Inicializa el contador de cantidad
  quantity: number = 1;

  product = {
    id: 2,
    img: "https://mmorpgbr.com.br/wp-content/uploads/2022/06/maxresdefault-12.jpeg", // URL de la imagen
    name: 'Notebook Gamer MSI Raider',
    price: 800000,
    stock: 3,
  };

  constructor(private cartService: CarroService,private router:Router) {}

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
