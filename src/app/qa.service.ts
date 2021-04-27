import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Answer } from './question-detail/answer';
import { Question } from './question/question';
import { Category } from './category/category';

@Injectable({
  providedIn: 'root'
})
export class QaService {

  private questionsUrl = 'http://localhost:3000/questions';  // URL to web api
  private answerUrl = 'http://localhost:3000/answers';
  private categoryUrl = 'http://localhost:3000/category';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
  ) { }

  getQuestions(): Observable<any> {
    return this.http.get<any>(this.questionsUrl)
  }

  getQuestionDetail(id: string): Observable<any> {
    return this.http.get<any>(`${this.questionsUrl}/${id}`)
  }

  createQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.questionsUrl, question, this.httpOptions)
  }

  createAnswer(answer: Answer): Observable<Answer> {
    return this.http.post<Answer>(this.answerUrl, answer, this.httpOptions)
  }

  deleteAnswer(id: number): Observable<Answer> {
    const url = `${this.answerUrl}/${id}`
    return this.http.delete<Answer>(url, this.httpOptions)
  }

  updateAnswer(id: number,answer: Answer): Observable<Answer> {
    const url = `${this.answerUrl}/${id}`
    return this.http.put<Answer>(url, answer, this.httpOptions)
  }

  getCategory(): Observable<any> {
    return this.http.get<any>(this.categoryUrl)
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.categoryUrl, category, this.httpOptions)
  }
}
