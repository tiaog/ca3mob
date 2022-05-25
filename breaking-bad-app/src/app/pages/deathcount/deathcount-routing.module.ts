import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeathcountPage } from './deathcount.page';

const routes: Routes = [
  {
    path: '',
    component: DeathcountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeathcountPageRoutingModule {}
