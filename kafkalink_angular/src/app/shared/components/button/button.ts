import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  imports: [ButtonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
@Input() label? : string;
@Input() disabled? : boolean = false;
@Input() icon? : string

@Output() btn_event = new EventEmitter<any>();

constructor(){}

public click(){
  this.btn_event.emit('click')
}
}
