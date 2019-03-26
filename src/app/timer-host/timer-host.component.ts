import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-host',
  templateUrl: './timer-host.component.html',
  styleUrls: ['./timer-host.component.css']
})
export class TimerHostComponent {
  tickHandler1(value) {
    console.log('Tick Handler 1 :' + value)
  }
  tickHandler2(value) {
    console.log('Tick Handler 2 :' + value)
  }

}
