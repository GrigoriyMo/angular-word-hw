import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RandomWord } from '../../Classes/RandomWord'

@Injectable({
  providedIn: 'root'
})
export class RandomWordService {
  public type= 'noun';
  private wordsUrl = `https://api.api-ninjas.com/v1/randomword?type=${this.type}`;

  constructor(private http: HttpClient) { }

  getRandomWords(): Observable<RandomWord> {

    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('X-Api-Key', 'uIM1baaBU7RJ8/M8i+4hXw==FvImFB8RJHIdjrqH')

    return this.http.get<RandomWord>(this.wordsUrl, { headers: httpHeaders });
  }
}
