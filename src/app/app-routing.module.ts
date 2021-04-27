import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  { path: '', redirectTo: '/category', pathMatch: 'full' },
  { path:'question', component :QuestionComponent},
  { path: 'question/:id', component: QuestionDetailComponent },
  { path: 'category', component: CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
