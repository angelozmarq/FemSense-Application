import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { showTab } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router:Router) {
    showTab();
  }

  goToTracker() {
    this.router.navigate(['/tracker'])
  }
}
