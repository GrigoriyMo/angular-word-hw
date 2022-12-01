import { Component } from '@angular/core';
import { Word } from '../../Classes/Word'
import { WordsList } from '../../Classes/WordsList'

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css'],

})

export class RecentlyAddedComponent {

  words = [
    {
      rus: 'Дом',
      eng: 'Home',
    }
    , {
      rus: 'Дом',
      eng: 'Home',
    }
  ]

  renderWordList: Array<Word> = [];

  ngOnInit() {

    let tempWord = new Word(this.words[0]);
    let tempWord2 = new Word(this.words[1]);
    let wordList = new WordsList();
    wordList.pushList(tempWord);
    wordList.pushList(tempWord2);
    this.renderWordList = wordList.getList();

  }

}
