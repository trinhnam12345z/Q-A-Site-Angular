import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import { QuestionComponent } from './question/question.component'
import { HttpClientModule } from '@angular/common/http';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { FormsModule } from '@angular/forms';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { FilterPipe } from './filter.pipe';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserLikeComponent } from './user-like/user-like.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    CreateQuestionComponent,
    QuestionDetailComponent,
    FilterPipe,
    SigninComponent,
    SignupComponent,
    UserLikeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  entryComponents:[UserLikeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
