import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  { path: '', redirectTo: '/question', pathMatch: 'full' },
  { path:'question', component :QuestionComponent},
  { path: 'question/:id', component: QuestionDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
