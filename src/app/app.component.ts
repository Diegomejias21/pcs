import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor() {}

  logout() {
    console.log('Cerrar sesión');
    // Aquí puedes agregar la lógica para cerrar sesión.
  }
  
}
