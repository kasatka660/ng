import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  name: string = 'default value';
 @Input()
 counterValue: number = 1;


  increment() {

  }

}
