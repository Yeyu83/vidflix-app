import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagementFilmsPageRoutingModule } from './management-films-routing.module';

import { ManagementFilmsPage } from './management-films.page';

@NgModule({
  declarations: [ManagementFilmsPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ManagementFilmsPageRoutingModule
  ],
  exports: [ManagementFilmsPage]
})
export class ManagementFilmsPageModule {}
