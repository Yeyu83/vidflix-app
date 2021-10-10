import { Component, OnInit } from '@angular/core';
import { MenuItem } from './interfaces/menu-item.interface';
import { ModalController, AlertController } from '@ionic/angular';
import { LoginComponent } from './components/login/login.component';
import { User } from './interfaces/user.interface';
import { StorageService } from './services/storage.service';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public user: Partial<User>;

  public menuItems: MenuItem[] = [
    { title: 'Películas', admin: false, active: true, link: '/films/all-films', icon: '' },
    { title: 'Favoritos', admin: false, active: false, link: '/favourites', icon: '' },
    { title: 'Administración', admin: false, active: false, link: '/management/management-films', icon: '' },
    { title: 'Comunidad', admin: false, active: false, link: '/community', icon: '' },
    { title: 'Muro', admin: false, active: false, link: '/wall', icon: '' },
  ];

  constructor(
    public modalController: ModalController,
    private storageService: StorageService,
    private userService: UserService,
    public alertController: AlertController,
  ) { }

  async ngOnInit() {
    this.storageService.init().then(async () => {
      const storagedUser = await this.storageService.get('user');
      if (storagedUser) {
        this.userService.setUser(storagedUser);
        this.user = { nickname: this.userService.getUser() };
      }
    });
  }

  public selectItem(index: number): void {
    this.menuItems = this.menuItems.map(item => ({ ...item, active: false }));
    this.menuItems[index].active = true;
  }

  public async showLoginModal(): Promise<void> {
    const modal = await this.modalController.create({ component: LoginComponent });
    modal.onDidDismiss().then(data => {
      if (data.data) {
        this.user = data.data;
      }
    });
    return await modal.present();
  }

  public async showLogoutAlert() {
    const alert = await this.alertController.create({
      header: 'Cerar sesión',
      message: '¿Está seguro que desea cerrar sesión?',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => this.logout(),
        },
        { text: 'Cancelar' }
      ]
    });
    await alert.present();
  }

  private logout(): void {
    this.user = null;
    this.userService.unsetUser();
    this.storageService.remove('user');
  }
}
