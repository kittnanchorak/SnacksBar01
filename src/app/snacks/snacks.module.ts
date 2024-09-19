import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SnacksPageRoutingModule } from './snacks-routing.module';

import { snacksPage } from './snacks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SnacksPageRoutingModule
  ],
  declarations: [snacksPage]
})
export class SnacksPageModule {}
