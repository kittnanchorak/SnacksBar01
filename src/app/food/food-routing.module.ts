import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { foodPage } from './food.page';

const routes: Routes = [
  {
    path: '',
    component: foodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodPageRoutingModule {}
