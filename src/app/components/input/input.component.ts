import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() type:String;
  @Input() placeholder:String; 
  @Input() name:String;

  @Output() onChange = new EventEmitter();
  sharedVar: string;
  

  constructor() { }


change() {
  return this.onChange.emit({
    value:this.sharedVar
  })
  }  
  


}
