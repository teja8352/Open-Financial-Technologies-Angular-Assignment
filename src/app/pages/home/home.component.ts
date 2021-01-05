import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'open-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isScrolling: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  buttonClick() {
    console.log("Button Clicked");
  }

}
