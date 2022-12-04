import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class TranslateService {

  constructor(private http: HttpClient) { }

  postTranslate(originalQuery: string): Observable<string> {

    const encodedParams = new URLSearchParams();
    encodedParams.append("source", "en");
    encodedParams.append("target", "ru");
    encodedParams.append("q", originalQuery);

    let url = `https://google-translate1.p.rapidapi.com/language/translate/v2`;

    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('content-type', 'application/x-www-form-urlencoded');
    httpHeaders = httpHeaders.append('Accept-Encoding', 'application/gzip');
    httpHeaders = httpHeaders.append('X-RapidAPI-Key', 'e263c85038msh59b3b1b54125060p161c1djsnaee8f2d34ecb');
    httpHeaders = httpHeaders.append('X-RapidAPI-Host', 'google-translate1.p.rapidapi.com');

    return this.http.post<string>(url, encodedParams, { headers: httpHeaders });

  }
}
