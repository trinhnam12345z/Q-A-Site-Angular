import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  user:any ;
  constructor(
    private qaService: QaService,
    private route: ActivatedRoute,
  ) {
    this.user =  JSON.parse(localStorage.getItem("user") || "{}");
  }

  answerDisplay: any[] = [];
  pageIndex: number = 0;
  pageSize: number = 5;


  ngOnInit(): void {
    this.getQuestionDetail();
  }

  getQuestionDetail(): void {
    const id: string = this.route.snapshot.paramMap.get('id') || "";
    this.answer.question = +id; // Add questionID
    this.qaService.getQuestionDetail(id)
      .subscribe((question:any) => {
        this.question = question;
        // console.log(this.question);
        this.answers = question.answers?.sort(function (a:any, b:any) {
          return b.answerID - a.answerID;
        })||[];
        console.log(this.answers);
        this.answerDisplay = question.answers?.slice(this.pageIndex * this.pageSize, this.pageSize) || [];
      });
  }

  CreateAnswer() {
    console.log(this.answer);
    this.qaService.createAnswer(this.answer).subscribe(res => {
      this.getQuestionDetail();
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
      this.answerDisplay = this.answers.slice(this.pageIndex * this.pageSize, this.pageSize);
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
          this.answers[i] = res;
          this.answerDisplay = this.answers.slice(this.pageIndex * this.pageSize, this.pageSize);
        }
      } this.editAnswer = undefined;
    })
  }



  /**
   * List question theo pageSize
   * @param event 
   */
  getAnswersData(event: PageEvent) {
    console.log(event);
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
      console.log(this.pageIndex);
      console.log(this.pageSize);
      console.log(this.pageIndex * this.pageSize);
      console.log((this.pageIndex + 1) * this.pageSize);
    this.answerDisplay = this.answers.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize)
  }
}
