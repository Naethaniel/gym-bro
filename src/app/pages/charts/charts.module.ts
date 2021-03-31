import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsPage } from './charts.page';

import { ChartsRoutingModule } from './charts-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ChartsRoutingModule
  ],
  declarations: [ChartsPage]
})
export class ChartsModule {}
