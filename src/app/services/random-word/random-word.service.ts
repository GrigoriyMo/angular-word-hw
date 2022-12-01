import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RandomWord } from '../../Classes/RandomWord'

@Injectable({
  providedIn: 'root'
})
export class RandomWordService {

  private wordsUrl = 'https://api.api-ninjas.com/v1/randomword';

  constructor( private http: HttpClient) { }

  getRandomWords(): Observable<RandomWord[]> {
   
    this.http.get<RandomWord>(this.wordsUrl);

    const WORDS: RandomWord[] = [
      new RandomWord('hello'),
      new RandomWord('bye')
    ];
    
    const word = of(WORDS);
   
    return word;
  }
}
