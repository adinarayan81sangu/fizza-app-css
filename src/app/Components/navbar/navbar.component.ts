import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
isOpend:boolean=false;
  ngOnInit(): void {
  }
menuClick(){
 this.isOpend=!this.isOpend;
}
}
