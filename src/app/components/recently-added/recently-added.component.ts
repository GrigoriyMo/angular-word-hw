import { Component } from '@angular/core';
import { Word } from '../../Classes/Word'
import { WordsList } from '../../Classes/WordsList'

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css'],

})

export class RecentlyAddedComponent {



  renderWordList: Array<Word> = [];

  ngOnInit() {


   

  }

}
