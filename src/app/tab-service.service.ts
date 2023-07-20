import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabServiceService {

  constructor() { }

  private isValue: number = 1;

  setActiveTab(tabNumber: number) {
    this.isValue = tabNumber;
  }

  getActiveTab(): number {
    return this.isValue;
  }
}
