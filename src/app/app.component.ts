import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnChanges  {
  user:any ;
  constructor(
    private router: Router,
  ) { 
    this.user =  JSON.parse(localStorage.getItem("user") || "{}");
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  title = 'Q-A-Site';
  
  signOut(){
    // console.log(localStorage.getItem("user"));
    localStorage.removeItem('user');
    location.href="/signin";
  }
}
