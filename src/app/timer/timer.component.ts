import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  private intervalObject: any;
  private currentValue: number=0;

  @Input()
  interval: number = 1000;

  @Output()
  tick: EventEmitter<number> = new EventEmitter();

  start() {
    if (this.intervalObject) return;
    this.intervalObject = setInterval(() => { this.callback() }, this.interval);
  }
  stop() {
    if (!this.intervalObject) return;
    clearInterval(this.intervalObject);
    this.intervalObject = false;
  }
  private callback() {
    this.currentValue++;
    this.tick.emit(this.currentValue);
  }
}
