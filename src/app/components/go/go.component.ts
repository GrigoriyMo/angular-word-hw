import { Component, OnInit } from '@angular/core';
import { RandomWordService } from '../../services/random-word/random-word.service'
import { RandomWord } from '../../Classes/RandomWord'


@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.css']
})
export class GoComponent implements OnInit {

  newWord: RandomWord[] = [];

  constructor(private randomWordService: RandomWordService) { }

  getWord(): void {
    this.randomWordService.getRandomWords()
      .subscribe(newWord => this.newWord = newWord);
    console.log(this.newWord);
  }


  ngOnInit(): void {
    this.getWord();
  }

}
