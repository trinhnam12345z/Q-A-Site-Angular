import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    public dialogRef: MatDialogRef<CreateCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  category: Category = {} as Category;

  ngOnInit(): void {
    console.log(this.data);
    
  }

  CreateCategory() {
    this.category.categoryId = this.data?.id;
    this.qaService.createCategory(this.category).subscribe(res=>{ if(res) alert("Created successfully")});
  }
}
