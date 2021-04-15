import { Component, OnInit } from '@angular/core';
import { QaService } from '../qa.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(
    private qaService : QaService
  ) {}
  questions :any;
  ngOnInit(): void {
    this.qaService.getQuestions().subscribe(questions=> this.questions = questions);
  }

}
