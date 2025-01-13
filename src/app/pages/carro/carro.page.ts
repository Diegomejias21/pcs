import { Component } from '@angular/core';
import { CarroService } from 'src/app/core/services/carro.service';

interface Product {
  id: number;
  img: string;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-carro',
  templateUrl: './carro.page.html',
  styleUrls: ['./carro.page.scss'],
  standalone: false,
})
export class CarroPage {

  cartItems: Product[] = [];
  total = 0;

  constructor(private carroService: CarroService) {
    // Suscribirse a los cambios en el carrito
    this.carroService.cart$.subscribe((items) => {
      this.cartItems = items;
      this.calculateTotal();
    });
  }

  increment(itemId: number) {
    const item = this.cartItems.find((p) => p.id === itemId);
    if (item) {
      this.carroService.updateQuantity(itemId, item.quantity + 1);
    }
  }

  decrement(itemId: number) {
    const item = this.cartItems.find((p) => p.id === itemId);
    if (item && item.quantity > 1) { // Evitar valores negativos
      this.carroService.updateQuantity(itemId, item.quantity - 1);
    }
  }

  calculateTotal() {
    return this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }
  
  getTotal() {
    return this.calculateTotal();
  }

  confirmPurchase() {
    const purchaseDetails = this.cartItems.map((item) => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));
  
    console.log('Detalles de la compra:', purchaseDetails);
    alert(`Compra confirmada. Total: $${this.total}`);
    this.carroService.clearCart(); // Vaciar el carrito
  }
}
