import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Product {
  id: number;
  img: string;
  name: string;
  price: number;
  quantity: number;
}


@Injectable({
  providedIn: 'root'
})
export class CarroService {
  private cart = new BehaviorSubject<Product[]>([]);

  // Observable para suscribirse a los cambios
  cart$ = this.cart.asObservable();

  addToCart(product: Product) {
    const currentCart = [...this.cart.getValue()];
    const itemIndex = currentCart.findIndex((p) => p.id === product.id);
    if (itemIndex > -1) {
      currentCart[itemIndex] = {
        ...currentCart[itemIndex],
        quantity: Math.min(currentCart[itemIndex].quantity + product.quantity, 3),
      };
    } else {
      currentCart.push({ ...product, quantity: Math.min(product.quantity, 3) });
    }
    this.cart.next(currentCart); // Emitir nuevo arreglo
  }
  getCart() {
    return this.cart.getValue();
  }

  updateQuantity(productId: number, quantity: number) {
    const currentCart = [...this.cart.getValue()];
    const itemIndex = currentCart.findIndex((p) => p.id === productId);
    if (itemIndex > -1) {
      currentCart[itemIndex] = {
        ...currentCart[itemIndex],
        quantity: Math.min(Math.max(quantity, 1), 3),
      };
      this.cart.next(currentCart); // Emitir nuevo arreglo
    }
  }

  removeFromCart(productId: number) {
    const updatedCart = this.cart.getValue().filter((p) => p.id !== productId);
    this.cart.next(updatedCart);
  }

  clearCart() {
    this.cart.next([]);
  }
}
