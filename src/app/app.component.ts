import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private router: Router) {}

  beenClicked: boolean = false;
  public isValue: number = 0;

  home(){
    const swiper = document.getElementById('swiper');
    if (swiper != undefined) {
      swiper.style.display = "none";
    }
    this.router.navigate(['/home'])
  }

  toggle1() { this.isValue = 1; }
  toggle2() { this.isValue = 2; }
  toggle3() { this.isValue = 3; }
  toggle4() { this.isValue = 4; }
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