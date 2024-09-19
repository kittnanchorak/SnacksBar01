import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { mamaPage } from './mama.page';

const routes: Routes = [
  {
    path: '',
    component: mamaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MamaPageRoutingModule {}
