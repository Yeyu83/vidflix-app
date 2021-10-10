import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  exports: [LoginComponent],
  providers: [UserService],
})
export class LoginModule { }
