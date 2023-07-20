import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { showTab } from '../app.component';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.page.html',
  styleUrls: ['./reminders.page.scss'],
})
export class RemindersPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  settings(){
    showTab();
    this.router.navigate(['/settings'])
  }

}
