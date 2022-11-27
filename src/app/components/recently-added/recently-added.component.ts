import { Component } from '@angular/core';
import { Word } from './Word'
import { WordsList } from './WordsList'

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
  ]

  ngOnInit() {

    let tempWord = new Word(this.words[0]);
    let wordList = new WordsList();
     wordList.pushList(tempWord);
    let renderWordList = wordList.getList();
    console.log(renderWordList);
  }

  //

}
