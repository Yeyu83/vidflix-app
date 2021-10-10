import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public modalController: ModalController,
    public alertController: AlertController,
    public toastController: ToastController,
    private storageService: StorageService,
    private userService: UserService,
  ) { }

  async ngOnInit() {
    this.form = this.fb.group({
      nickname: ['', Validators.required], password: ['', Validators.required],
    });
  }

  public verifyLogin(): void {
    this.userService.login(this.form.value).subscribe((user: any) => {
      if (user) {
        this.storageUser(user);
        this.closeModal(user);
        this.showSuccessToast();
      } else {
        this.showErrorAlert();
      }
    });
  }

  public closeModal(user?: any): void {
    this.modalController.dismiss(user);
  }

  private storageUser(user: User): void {
    const userToStorage = { key: 'user', value: user.nickname };
    this.storageService.set(userToStorage);
  }

  private async showErrorAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Credenciales incorrectas',
      buttons: ['OK']
    });
    await alert.present();
  }

  private async showSuccessToast(): Promise<void> {
    const toast = await this.toastController.create({
      message: '¡Bienvenido de nuevo!',
      duration: 2000
    });
    toast.present();
  }
}
