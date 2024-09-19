import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { snacksPage } from './snacks.page';

const routes: Routes = [
  {
    path: '',
    component: snacksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnacksPageRoutingModule {}
