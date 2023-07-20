import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { showTab } from '../app.component';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.page.html',
  styleUrls: ['./graphs.page.scss'],
})
export class GraphsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  settings(){
    showTab();
    this.router.navigate(['/settings'])
  }
}
