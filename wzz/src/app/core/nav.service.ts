import {Injectable} from '@angular/core';

@Injectable()
export class NavService {

  constructor() {
  }

  getMenus(): MenuItem[] {
    const menus: MenuItem[] = [
      {name: 'Runbook', url: 'runbooks', active: false},
      {name: 'Inventory', url: 'inventory/devices', active: false},
      {name: 'Map', url: 'maps', active: false},
    ];
    return menus;
  }

}


export class MenuItem {
  constructor(public name: string, public url: string, public active: boolean) {
  }
}
