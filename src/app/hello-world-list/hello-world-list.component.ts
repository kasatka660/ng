import { Component, OnInit } from '@angular/core';

import {Phrase} from '../phrase';

const PHRASES: Phrase[] = [
  {value: 'Hello World', language: 'English'},
  {value: 'Привет Мир', language: 'Russian'},
  {value: 'Hallo Welt', language: 'German'}
];
@Component({
  selector: 'app-hello-world-list',
  templateUrl: './hello-world-list.component.html',
  styleUrls: ['./hello-world-list.component.css']
})
export class HelloWorldListComponent{
  phraseList: Phrase[] = PHRASES;
  selectedPhraseLanguage: string;

  onSelect(selectedPhrase: Phrase) {
    this.selectedPhraseLanguage = selectedPhrase.language;
  }

}
