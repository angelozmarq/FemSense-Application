import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hideTab } from '../app.component';

import { TabServiceService } from '../tab-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  privacyOpen = false;
  termsOpen = false;
  accessOpen = false;

  privacyPolicy(ev: Event) {
    this.privacyOpen = true;
    const popover = document.querySelector('ion-popover');
    if (popover) {
      popover.addEventListener('ionPopoverDidDismiss', () => {
        this.privacyOpen = false;
      });
    }
  }

  termsOfUse(ev: Event) {
    this.termsOpen = true;
    const popover = document.querySelector('ion-popover');
    if (popover) {
      popover.addEventListener('ionPopoverDidDismiss', () => {
        this.termsOpen = false;
      });
    }
  }

  accessStatement(ev: Event) {
    this.accessOpen = true;
    const popover = document.querySelector('ion-popover');
    if (popover) {
      popover.addEventListener('ionPopoverDidDismiss', () => {
        this.accessOpen = false;
      });
    }
  }

  constructor(
    private router: Router,
    private tabService: TabServiceService) { }

  ngOnInit() {
    this.tabService.setActiveTab(4);
  }

  home(tabNumber: number){
    this.tabService.setActiveTab(tabNumber);
    this.router.navigate(['/home'])
  }

  login(){
    this.router.navigate(['/login'])
    hideTab();  
  }

  graphs(){
    hideTab();
    this.router.navigate(['/graphs'])
  }
  cycle(){
    hideTab();
    this.router.navigate(['/cycle'])
  }
  reminders(){
    hideTab();
    this.router.navigate(['/reminders'])
  }
  help(){
    this.router.navigate(['/settings'])
  }
}
