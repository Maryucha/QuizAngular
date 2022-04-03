import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }


  getQuestion() {
    return this.http.get<any>('../../../assets/questions.json');
  }
}
