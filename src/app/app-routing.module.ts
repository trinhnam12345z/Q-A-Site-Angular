import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionComponent } from './question/question.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path:'question', component :QuestionComponent},
  { path: 'question/:id', component: QuestionDetailComponent },
  { path:'signin', component :SigninComponent},
  { path:'signup', component :SignupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
