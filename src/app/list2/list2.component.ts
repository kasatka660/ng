import { Component, OnInit } from '@angular/core';
declare const module: {
  id: string;
}
@Component({
  moduleId: module.id,
  selector: 'app-list2',
  templateUrl: 'list2.component.html',
  styleUrls: ['list2.component.css']
})
export class List2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
