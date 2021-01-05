import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'open-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() public title: string = "Click";
  @Input() public color: string = "primary";
  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  click(event: any) {
    this.onClick.emit(event);
  }

}
