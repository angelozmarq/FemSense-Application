import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { showTab, hideTab } from '../app.component';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username!: string;
  password!: string;

  constructor(private router: Router, private toastController: ToastController) {}

  ngOnInit() {
    hideTab()
  }

  login() {
    // USERNAME AND PASSWORD MATCH
    if (this.username === 'admin' && this.password === 'password') {
      this.router.navigate(['/home']);

    // CLEAR INPUT
    this.username = '';
    this.password = '';

    } else {
      // USERNAME AND PASSWORD DOES NOT MATCH
      this.notUser();
    }

    showTab();
  }

  // TOAST FOR NOT MATCH
  async notUser() {
    const toast = await this.toastController.create({
      message: 'Some information does not match.',
      duration: 2000,
      position: 'bottom',
      color: 'danger'
    });
    await toast.present();
  }

  // NAVIGATION
  home(){
    this.router.navigate(['/home'])
    showTab()
  }
  signUp(){
    this.router.navigate(['/signup'])
  }
}
