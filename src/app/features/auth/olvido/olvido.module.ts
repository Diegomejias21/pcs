import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidoPageRoutingModule } from './olvido-routing.module';

import { OlvidoPage } from './olvido.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidoPageRoutingModule,
    SharedModule //agregamos SharedModule para compartir componentes entre modulos
  ],
  declarations: [OlvidoPage]
})
export class OlvidoPageModule {}
