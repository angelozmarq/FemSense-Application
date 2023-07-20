import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TabServiceService } from './tab-service.service';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private router: Router, public tabService: TabServiceService) {}

  beenClicked: boolean = false;
  public isValue: number = 1;

  home(){
    const swiper = document.getElementById('swiper');
    if (swiper != undefined) {
      swiper.style.display = "none";
    }
    this.router.navigate(['/home'])
  }

  toggleTab(tabNumber: number) {
    this.tabService.setActiveTab(tabNumber);
  }
  // toggleHome() { this.isValue = 1; }
  // toggleTracker() { this.isValue = 2; }
  // toggleResources() { this.isValue = 3; }
  // toggleSettings() { this.isValue = 4; }
}

export function showTab() {
  const tabBar = document.getElementById('tabs');
  if (tabBar !== null) {
      console.log("enabled")
      tabBar.style.display = 'flex';
  }
}

export function hideTab() {
  const tabBar = document.getElementById('tabs');
  if (tabBar !== null) {
    tabBar.style.display = 'none';
  }
}