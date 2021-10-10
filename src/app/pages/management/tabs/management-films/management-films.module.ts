import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagementFilmsPageRoutingModule } from './management-films-routing.module';

import { ManagementFilmsPage } from './management-films.page';

@NgModule({
  declarations: [ManagementFilmsPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagementFilmsPageRoutingModule
  ],
  exports: [ManagementFilmsPage]
})
export class ManagementFilmsPageModule {}
