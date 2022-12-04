import { Component, OnInit } from '@angular/core';
import { RandomWordService } from '../../services/random-word/random-word.service'
import { Word } from '../../Classes/Word'
import { WordsList } from '../../Classes/WordsList'

@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.css']
})
export class GoComponent implements OnInit {

  newWords:Array<String> = [];
  learnedWords:WordsList = new WordsList();
  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(private randomWordService: RandomWordService) { }

  getWord(): void {
    this.randomWordService.getRandomWords()
      .subscribe(elem => {
       
        var string = new String(elem.word)
        this.newWords.push(string)
      });
  }

  wordLearnedChange(event:any){
    console.log(event);
    if(event instanceof Word){
      this.learnedWords.pushList(event);
      this.learnedWords.saveList();
    }
  }

  ngOnInit(): void {
    
    for (var i = 0; i < 3; i++) {
      this.getWord();
    }
  }

}
