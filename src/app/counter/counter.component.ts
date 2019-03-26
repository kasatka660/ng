import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {

  @Input()
  name: string;
  
  @Input()
  counterValue: number;

  @Input()
  step: number;

  increment() {
    this.counterValue = this.counterValue + this.step;
  }
}
