import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCategoryComponent } from '../create-category/create-category.component';
import { QaService } from '../qa.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: any[] = [];

  panelOpenState = false;
  constructor(
    private qaService: QaService,
    public dialog: MatDialog,
  ) { }

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  ngOnInit(): void {
    this.qaService.getCategory().subscribe((categories: any[]) => {
      this.categories = categories;
    });
  }

  openDialogCreate() {
    const dialogRef = this.dialog.open(CreateCategoryComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.qaService.getCategory().subscribe((categories: any[]) => {
        this.categories = categories;
      });
    });
  }
}
