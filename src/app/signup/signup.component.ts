import { Component, OnInit } from '@angular/core';
import { QaService } from '../qa.service';
import { User } from '../User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private qaService: QaService,
  ) { }

  confirmPassword: string = "";

  user: User = {} as User;

  ngOnInit(): void {
  }

  SignUpUser() {
    console.log(this.user);
    if (this.user.password === this.confirmPassword) {
      this.qaService.createUser(this.user).subscribe(res => { if (res) alert("Created successfully") });
    } else {
      alert("Sai Confirm Password !")
    }
  }
}
