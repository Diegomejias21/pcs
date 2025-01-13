import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [],
  exports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule, // Importar IonicModule para utilizar componentes y servicios de Ionic
  ],  // Exportar componentes y servicios de este módulo para ser utilizados en otros módulos.
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule, // Importar IonicModule para utilizar componentes y servicios de Ionic
  ]
})
export class SharedModule { }
