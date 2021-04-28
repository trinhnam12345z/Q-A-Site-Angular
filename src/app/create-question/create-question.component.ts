import { Component, OnInit } from '@angular/core';
import { Category } from '../category/category';
import { QaService } from '../qa.service';
import { Question } from '../question/question';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {
  

  constructor(
    private qaService: QaService,
  ) {}

    question: Question = {} as Question;
    
    ngOnInit(): void {
      this.qaService.getCategory().subscribe((category: any[]) => {
        this.category = category;
      });
    }

    category: any[] = [];

  CreateQuestion() {
    console.log(this.question);
    this.qaService.createQuestion(this.question).subscribe(res=>{ if(res) alert("Created successfully")});
  }

}
