import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomWordService {
  public type= 'noun';
  private wordsUrl = `https://api.api-ninjas.com/v1/randomword?type=${this.type}`;

  constructor(private http: HttpClient) { }

  getRandomWords(): Observable<any> {

    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('X-Api-Key', '')

    return this.http.get<any>(this.wordsUrl, { headers: httpHeaders });
  }
}
