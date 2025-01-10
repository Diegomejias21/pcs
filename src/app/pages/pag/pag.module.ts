import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagPageRoutingModule } from './pag-routing.module';

import { PagPage } from './pag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagPageRoutingModule
  ],
  declarations: [PagPage]
})
export class PagPageModule {}
