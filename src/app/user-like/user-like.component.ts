import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Like } from './like';


@Component({
  selector: 'app-user-like',
  templateUrl: './user-like.component.html',
  styleUrls: ['./user-like.component.css']
})
export class UserLikeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserLikeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Like[]) {}

  ngOnInit(): void {
  }

}
