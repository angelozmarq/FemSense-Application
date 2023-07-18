import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hideTab } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    hideTab();
  }

  home(){
    this.router.navigate(['/home'])
  }

}
