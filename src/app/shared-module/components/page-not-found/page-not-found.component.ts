import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  url!:string;

  constructor(private route:Router){

  }

  ngOnInit(){
    console.log(this.route)
  }
}
