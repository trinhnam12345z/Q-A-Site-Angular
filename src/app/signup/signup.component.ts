import { Component, OnInit } from '@angular/core';
import { QaService } from '../qa.service';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private qaService: QaService,
  ) {}

  confirmPassword: string = "";

  user: User = {} as User;

  ngOnInit(): void {
  }

  SignUpUser() {
    console.log(this.user);
    if (this.user.password === this.confirmPassword) {
      this.qaService.signUpUser(this.user).subscribe(res => { if (res) alert("Sign Up successfully") });
    } else {
      alert("Sai Confirm Password !")
    }
  }
}
