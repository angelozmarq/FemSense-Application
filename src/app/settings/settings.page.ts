import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { hideTab } from '../app.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  
  @ViewChild('privacy')
  privacy!: { event: Event; };
  privacyOpen = false;
  privacyPolicy(e: Event) {
    this.privacy.event = e;
    this.privacyOpen = true;
  }
  @ViewChild('terms')
  terms!: { event: Event; };
  termsOpen = false;
  termsOfUse(e: Event) {
    this.terms.event = e;
    this.termsOpen = true;
  }
  @ViewChild('access')
  access!: { event: Event; };
  accessOpen = false;
  accessStatement(e: Event) {
    this.access.event = e;
    this.accessOpen = true;
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['/home'])
  }

  login(){
    this.router.navigate(['/login'])
    hideTab()  
  }

  graphs(){
    this.router.navigate(['/graphs'])
  }
  cycle(){
    this.router.navigate(['/cycle'])
  }
  reminders(){
    this.router.navigate(['/reminders'])
  }
  help(){
    this.router.navigate(['/settings'])
  }
}
