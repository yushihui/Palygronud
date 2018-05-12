import {Injectable} from '@angular/core';

@Injectable()
export class DevicesService {
  constructor() {
  }
}

export interface Device {
  id: string;
  name: string;
  isIPAccouting: boolean;
  isIPSLA: boolean;
  isNetflow: boolean;
  isSNMPConfig: boolean;
  mainType: number;
  subType: number;
  mainTypeName: string;
  mgmtIP: string;
  mplsAsNum: string;
  mplsUpdate: boolean;
}
