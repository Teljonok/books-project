import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { BooksListComponent } from './books-list/books-list.component';
import { BookCardComponent } from './book-card/book-card.component';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { TabsNavComponent } from './tabs-nav/tabs-nav.component';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  declarations: [WelcomePageComponent,BooksListComponent, BookCardComponent, WishListComponent, TabsNavComponent],
  exports: [
    WelcomePageComponent,
    BooksListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,
    TooltipModule,
    CardModule,
    TabViewModule
  ],
  providers:[MessageService]
})

export class BooksModule {
}
