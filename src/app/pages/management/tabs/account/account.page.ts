import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {
  constructor(
    private menuController: MenuController,
  ) { }

  public showMenu(): void {
    this.menuController.open('main-menu');
  }
}
