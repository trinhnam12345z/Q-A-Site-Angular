import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:any ;
  constructor(
    private router: Router,
  ) { 
    this.user =  JSON.parse(localStorage.getItem("user") || "{}");
  }
  title = 'Q-A-Site';
  
  signOut(){
    // console.log(localStorage.getItem("user"));
    localStorage.removeItem('user');
    this.router.navigate(['/signin']);
  }
}
