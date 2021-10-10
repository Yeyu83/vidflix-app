import { Component } from '@angular/core';
import { MenuItem } from './interfaces/menu-item.interface';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menuItems: MenuItem[] = [
    { title: 'Películas', admin: false, active: true, link: '/films/all-films', icon: '' },
    { title: 'Favoritos', admin: false, active: false, link: '/favourites', icon: '' },
    { title: 'Administración', admin: false, active: false, link: '/management/management-films', icon: '' },
    { title: 'Comunidad', admin: false, active: false, link: '/community', icon: '' },
    { title: 'Muro', admin: false, active: false, link: '/wall', icon: '' },
  ];

  public selectItem(index: number): void {
    this.menuItems = this.menuItems.map(item => ({ ...item, active: false }));
    this.menuItems[index].active = true;
  }

  public login(): void {
    console.log('OK');
  }
}
