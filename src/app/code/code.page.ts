import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  settings(){
    this.router.navigate(['/settings'])
  }
}
