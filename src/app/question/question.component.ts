import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { CreateQuestionComponent } from '../create-question/create-question.component';
import { FilterPipe } from '../filter.pipe';
import { QaService } from '../qa.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(
    private qaService: QaService,
    public dialog: MatDialog,
  ) {}

  searchText: any;
  questions: any[] = [];
  questionDisplay: any[] = [];
  pageIndex: number = 0;
  pageSize: number = 5;

  ngOnInit(): void {
    this.qaService.getQuestions().subscribe((questions: any[]) => {
      this.questions = questions;
      this.questionDisplay = questions.slice(this.pageIndex * this.pageSize, this.pageSize)
    });
  }

  openDialogCreate() {
    const dialogRef = this.dialog.open(CreateQuestionComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.qaService.getQuestions().subscribe((questions: any[]) => {
        this.questions = questions; // Reload question
        this.questionDisplay = questions.slice(this.pageIndex * this.pageSize, this.pageSize)
      });
    });
  }

  /**
   * List question theo pageSize
   * @param event 
   */
  getQuestionData(event: PageEvent) {
    console.log(event);
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  /*  console.log(this.pageIndex);
      console.log(this.pageSize);
      console.log(this.pageIndex * this.pageSize);
      console.log((this.pageIndex + 1) * this.pageSize);*/
    this.questionDisplay = this.questions.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize)
  }
}
