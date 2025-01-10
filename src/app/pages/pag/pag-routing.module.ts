import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagPage } from './pag.page';

const routes: Routes = [
  {
    path: '',
    component: PagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagPageRoutingModule {}
