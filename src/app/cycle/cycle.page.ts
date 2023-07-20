import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { showTab } from '../app.component';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.page.html',
  styleUrls: ['./cycle.page.scss'],
})
export class CyclePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  settings(){
    showTab();
    this.router.navigate(['/settings'])
  }
}
