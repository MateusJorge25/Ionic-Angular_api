import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscaCepPage } from './busca-cep.page';

const routes: Routes = [
  {
    path: '',
    component: BuscaCepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscaCepPageRoutingModule {}
