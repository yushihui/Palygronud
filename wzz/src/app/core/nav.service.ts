import {Injectable} from '@angular/core';

@Injectable()
export class NavService {

  constructor() {
  }

  getMenus(): MenuItem[] {
    const menus: MenuItem[] = [
      {name: 'Runbook', url: 'runbooks'},
      {name: 'Inventory', url: 'inventory/devices'},
      {name: 'Map', url: 'maps'},
    ];
    return menus;
  }

}


export class MenuItem {
  constructor(public name: string, public url: string) {
  }
}
