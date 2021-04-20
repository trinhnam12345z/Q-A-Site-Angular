import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QaService } from '../qa.service';
import { Answer } from './answer';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  question: any;
  answers: any[] = [];
  answer: Answer = {} as Answer;
  editAnswer: any;
  constructor(
    private qaService: QaService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getQuestion();

  }

  getQuestion(): void {
    const id: string = this.route.snapshot.paramMap.get('id') || "";
    this.answer.question = +id; // Add questionID
    this.qaService.getQuestion(id)
      .subscribe(question => {
        this.question = question;
        // console.log(this.question);
        this.answers = question.answers.sort(function (a:any, b:any) {
          return b.answerID - a.answerID;
        });
        ;
      });
  }

  CreateAnswer() {
    console.log(this.answer);
    this.qaService.createAnswer(this.answer).subscribe(res => {
      if (res) {
        console.log(res); 
        this.answers.unshift(res); // Add answer
        //this.getQuestion(); // Reload answer
        alert("Created successfully")
      }
    });
  }

  DeleteAnswer(answer: Answer) {
    this.qaService.deleteAnswer(answer.answerID).subscribe(res=>{
      this.answers = this.answers.filter(a => a.answerID !== answer.answerID);
    })
  }

  setEdit(answer: any) {
    this.editAnswer = JSON.parse(JSON.stringify(answer));
  }

  cancelEdit() {
    this.editAnswer = undefined;
  }

  updateAnswer(answer: Answer) {
    this.qaService.updateAnswer(answer.answerID, this.editAnswer).subscribe(res => {
      for (let i = 0; i < this.answers.length; i++) {
        const a = this.answers[i];
        if (a.answerID === this.editAnswer.answerID) {
          this.answers[i] = this.editAnswer;
        }
      } this.editAnswer = undefined;
    })
  }

}
