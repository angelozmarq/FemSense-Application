import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this.router.navigate(['/settings'])
  }
}
