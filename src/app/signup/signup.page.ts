import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hideTab } from '../app.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  userName: string = ''
  eMail: string = ''
  passWord: string = ''
  // private database: DatabaseService
  constructor(private router: Router) {
  }

  ngOnInit() {
    // this.database.createDatabase();
    hideTab()
  }

  signup(){
    this.router.navigate(['/login'])
  } 

  login(){
    this.router.navigate(['/login'])
  }
}

