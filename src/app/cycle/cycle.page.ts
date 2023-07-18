import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this.router.navigate(['/settings'])
  }
}
