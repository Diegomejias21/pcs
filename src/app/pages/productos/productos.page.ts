import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: false,
})
export class ProductosPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) { }


  irPagina(){
    this.router.navigate(['/pag']);
  }

  irproducto1(){
    this.router.navigate(['/producto1']);
  }

  irproducto2(){
    this.router.navigate(['/producto2']);
  }

  irproducto3(){
    this.router.navigate(['/producto3']);
  }

  irproducto4(){
    this.router.navigate(['/producto4']);
  }

  irproducto5(){
    this.router.navigate(['/producto5']);
  }

  irproducto6(){
    this.router.navigate(['/producto6']);
  }

  ircarro(){
    this.router.navigate(['/carro']);
  }

  ngOnInit() {
  }

}
