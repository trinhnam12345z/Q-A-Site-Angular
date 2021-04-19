import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QaService } from '../qa.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  question: any;
  constructor(
    private qaService: QaService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
 this.getQuestion();
  }

  getQuestion(): void {
    const id: string = this.route.snapshot.paramMap.get('id') || "";
    this.qaService.getQuestion(id)
      .subscribe(question => this.question = question);
  }
}
