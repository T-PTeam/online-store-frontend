import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatgoryListComponent } from './categories/catgory-list/catgory-list.component';

const routes: Routes = [
  {
    path: '',
  component: CatgoryListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
