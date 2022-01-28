

import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {Observable} from 'rxjs';
import { Book } from './models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksResolverService implements Resolve<Book>{
  
  constructor() { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any{
    return localStorage.getItem('userName') ;
  }
}
