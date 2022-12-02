import { Component, OnInit } from '@angular/core';
import { RandomWordService } from '../../services/random-word/random-word.service'
import { WordsList } from '../../Classes/WordsList'

@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.css']
})
export class GoComponent implements OnInit {

  newWords = new WordsList();

  submitted = false;

  onSubmit() { this.submitted = true; }


  constructor(private randomWordService: RandomWordService) { }

  getWord(): void {
    this.randomWordService.getRandomWords()
      .subscribe(elem => {
       
        this.newWords.pushList( elem )
      });
  }

  ngOnInit(): void {
    for (var i = 0; i < 5; i++) {
      this.getWord();
    }
  }

}
