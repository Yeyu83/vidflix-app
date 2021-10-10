import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-management-films',
  templateUrl: './management-films.page.html',
  styleUrls: ['./management-films.page.scss'],
})
export class ManagementFilmsPage {
  constructor(
    private menuController: MenuController,
  ) { }

  public showMenu(): void {
    this.menuController.open('main-menu');
  }
}
