import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeathcountPageRoutingModule } from './deathcount-routing.module';

import { DeathcountPage } from './deathcount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeathcountPageRoutingModule
  ],
  declarations: [DeathcountPage]
})
export class DeathcountPageModule {}
