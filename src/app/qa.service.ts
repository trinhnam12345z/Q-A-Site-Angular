import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QaService {
  private questionsUrl = 'http://localhost:3000/questions';  // URL to web api

  constructor(
    private http: HttpClient,
  ) { }

  getQuestions(): Observable<any> {
    return this.http.get<any>(this.questionsUrl)
  }
}
