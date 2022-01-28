import { Injectable } from '@angular/core';
import {EMPTY, Observable, of} from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { Book } from './models/book';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  
  apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  shelfApiUrl ='https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/addVolume';
  yourAPIKey = 'AIzaSyAZhVAmNCr7Fe1ebY6lw0vic966cxVmN_U';
  
  constructor(private http: HttpClient, private messageService: MessageService) {
  }
  
  getBySearch(search: string): Observable<Book> {
    const searchString = search +'+intitle';
    return this.http
               .get<Book>(`${this.apiUrl}?q=${searchString}&maxResults=20&:keyes&key=${this.yourAPIKey}`)
               .pipe(map((eRes: any) => ({
                   id: eRes._id,
                   ...eRes
                 })),
                 
                 catchError(() => {
                   this.handleError();
                   return EMPTY;
                 }));
  }
  
  // removeFromFavorites(id: string): Observable<any> {
  //   return this.http
  //              .delete(`${this.apiUrl}/${id}`)
  //              .pipe(
  //                catchError(() => {
  //                  this.handleError();
  //                  return EMPTY;
  //                }));
  // }
  
  addToFavorites(book) {
    const tempBooksList = JSON.parse(localStorage.getItem('favorites')) || [];
    const allBooks = [];
    tempBooksList.push(book);
    tempBooksList.forEach( item => {
      if (allBooks.length && allBooks.some(book => book.id != item.id)){
        allBooks.push(item);
      }
      else {
        allBooks.push(item);
      }
    });
    localStorage.setItem('favorites', JSON.stringify(allBooks));
    
    // not find way how to get token
    // const options = {
    //   headers: new HttpHeaders({
    //       'Content-Type': 'application/json',
    //     'Content-Length':' CONTENT_LENGTH'
    //     }
    //   )};
    // return this.http
    //            .post(`${this.shelfApiUrl}?volumeId/${id}&key=${this.yourAPIKey}`,null, options)
    //            .pipe(
    //              catchError(() => {
    //                this.handleError();
    //                return EMPTY;
    //              }));
  }
  
  // getById(id: string): Observable<Book> {
  //   return this.http
  //              .get<Book>(`${this.apiUrl}/${id}`)
  //              .pipe(map((eRes: any) => ({
  //                  id: eRes._id,
  //                  ...eRes
  //                })),
  //                catchError(() => {
  //                  this.handleError();
  //                  return EMPTY;
  //                }));
  // }
  
  
  // update(book: Book): Observable<Book> {
  //   return this.http
  //              .put<Book>(`${this.apiUrl}/${book.id}`, book)
  //              .pipe(
  //                catchError(() => {
  //                  this.handleError();
  //                  return EMPTY;
  //                }));
  // }
  //
  private handleError() {
    this.messageService.add({
      severity: 'error',
      detail: 'Something went wrong'
    });
  }
  
  getAllFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  }
}
