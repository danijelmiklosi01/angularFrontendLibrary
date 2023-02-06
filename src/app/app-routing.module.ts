import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details/book-details.component';
import { BookPageComponent } from './components/book-page/book-page/book-page.component';
import { UserDetailsComponent } from './components/user-details/user-details/user-details.component';
import { UsersPageComponent } from './components/user-page/user-page.component';

const routes: Routes = [
  { path: 'users', component: UsersPageComponent },
  { path: 'books', component: BookPageComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'user/add', component: UsersPageComponent },
  { path: 'book/:id', component: BookDetailsComponent },
  { path: 'book/add', component: BookPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
