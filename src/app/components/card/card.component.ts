import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'open-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() public color: string = "";
  @Input() public img: string = "";
  @Input() public icon: string = "";
  @Input() public title: string = "";
  @Input() public content: string = "";
  @Input() public opacity: number = 1;
  @Input() public width: string = "";
  @Input() public height: string = "";
  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  click(event: any) {
    this.onClick.emit(event);
  }

}
