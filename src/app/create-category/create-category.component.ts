import { Component, OnInit } from '@angular/core';
import { Category } from '../category/category';
import { QaService } from '../qa.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  constructor(
    private qaService: QaService,
  ) { }
  category: Category = {} as Category;

  ngOnInit(): void {
  }

  CreateCategory() {
    this.qaService.createCategory(this.category).subscribe(res=>{ if(res) alert("Created successfully")});
  }
}
