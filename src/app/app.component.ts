import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '我是主页面';
  constructor(private router: Router){

  }
  getTwoProduct(){
     this.router.navigate(['/two']);
  }
}

