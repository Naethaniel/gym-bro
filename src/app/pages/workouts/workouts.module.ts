import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkoutsPage } from './workouts.page';

import { WorkoutsRoutingModule } from './workouts-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    WorkoutsRoutingModule
  ],
  declarations: [WorkoutsPage]
})
export class WorkoutsModule {}
