import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { CreateQuestionComponent } from '../create-question/create-question.component';
import { QaService } from '../qa.service';
import { Like } from '../user-like/like';
import { UserLikeComponent } from '../user-like/user-like.component';
import { Question } from './question';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(
    private qaService: QaService,
    public dialog: MatDialog,
  ) { }
  like: Like = {} as Like;
  likes: any[] = [];


  searchText: any;
  questions: any[] = [];
  filterQuestions: any[] = [];
  questionDisplay: any[] = [];
  pageIndex: number = 0;
  pageSize: number = 5;

  answers: any[] = [];

  ngOnInit(): void {
    this.getQuestion();
  }

  getQuestion() {
    this.qaService.getQuestions().subscribe((questions: any[]) => {
      this.questions = questions;
      this.filterQuestions = JSON.parse(JSON.stringify(questions));
      this.questionDisplay = questions.slice(this.pageIndex * this.pageSize, this.pageSize)
    });
  }
  openDialogCreate() {
    const dialogRef = this.dialog.open(CreateQuestionComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.qaService.getQuestions().subscribe((questions: any[]) => {
        this.questions = questions; // Reload question
        this.filterQuestions = JSON.parse(JSON.stringify(questions));
        this.questionDisplay = questions.slice(this.pageIndex * this.pageSize, this.pageSize)
      });
    });
  }

  /**
   * List question theo pageSize
   * @param event 
   */
  pageChange(event: PageEvent) {
    console.log(event);
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.filterQuestions = this.transform(this.questions, this.searchText);
    this.questionDisplay = this.filterQuestions.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize)
  }

  search(event: any) {
    this.filterQuestions = this.transform(this.questions, event.target.value);
    this.pageIndex = 0;
    this.questionDisplay = this.filterQuestions.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize)
  }

  transform(items: Question[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText || searchText.length === 0) {
      return items;
    }
    searchText = searchText.toLowerCase(); // ? toLowerCase()
    return items.filter(it => {
      return it.content.toLowerCase().includes(searchText) || it.title.toLowerCase().includes(searchText); // ? toLowerCase()
    });
  }

  Like(questionId: number) {
    this.qaService.like({ questionId }).subscribe(res => {
      console.log(res);
      const a = this.questions.find(qs =>
        qs.questionID == questionId
      ); 
      a.liked = !res.isDelete;
      if (res.isDelete === false) {
        a.likes.push(res);
      } else {
        const x = a.likes.indexOf(res);
        console.log(x);
        a.likes.splice(x,1);
      }
    });
  }





  openDialogUserLike(question: any) {
    const dialogRef = this.dialog.open(UserLikeComponent, {
      data: { likes: question.likes as Like[] }
    });
    dialogRef.afterClosed()
  }
}
