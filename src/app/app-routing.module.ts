import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './books/books-list/books-list.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BooksGuard } from './books/books.guard';
import { WishListComponent } from './books/wish-list/wish-list.component';
import { TabsNavComponent } from './books/tabs-nav/tabs-nav.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomePageComponent},
  {canActivate: [BooksGuard], path: 'books', component: TabsNavComponent},
  {canActivate: [BooksGuard], path: 'search', component: BooksListComponent},
  {canActivate: [BooksGuard], path: 'favorites', component: WishListComponent},
  {path: '', redirectTo: 'welcome'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
