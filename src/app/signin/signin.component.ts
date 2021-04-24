import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QaService } from '../qa.service';
import { User } from '../user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private qaService: QaService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem("user")) {
      this.router.navigate(['/question']);
    }
  }

  user: User = {} as User;

  SignInUser() {
    this.qaService.signInUser(this.user).subscribe(res => {
      // debugger
      if (res) {
        localStorage.setItem("user", JSON.stringify(res));
        alert("Sign In successfully");
        // redirect to url
        this.router.navigate(['/question']);
      }
    });

  }
}
