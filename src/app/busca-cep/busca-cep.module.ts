import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscaCepPageRoutingModule } from './busca-cep-routing.module';

import { BuscaCepPage } from './busca-cep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscaCepPageRoutingModule
  ],
  declarations: [BuscaCepPage]
})
export class BuscaCepPageModule {}
