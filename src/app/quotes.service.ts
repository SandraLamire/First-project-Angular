import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// manquant dans la correction
import { Observable } from 'rxjs';
import { Quote } from './quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) { }

  getRandomQuote(): Observable<Quote> {
    const apiUrl = 'https://api.quotable.io/random';
    return this.http.get<Quote>(apiUrl);
  }
}
