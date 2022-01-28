import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../models/book';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  userName:string;
  searchText: any;
  books:Book[] = [];
  nodata: boolean;
  constructor( private bookService: BooksService,
               private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
  }
  
  onSearchClick(searchText) {
    (searchText && searchText.length >= 2) && this.bookService.getBySearch(searchText).subscribe( booksData => {
      this.books = this.prepareDataForUi(booksData);
  })
  }
  
  private prepareDataForUi(booksData) {
    if(!booksData.totalItems){
      this.nodata = true;
      return;
    }
    const data = [];
    this.books = booksData.items.map((item, index) => {
      data.push({
        id: item.id,
        title: item.volumeInfo.title,
        subtitle: item.volumeInfo.subtitle ? item.volumeInfo.subtitle : '',
        authors : item.volumeInfo.authors,
        publishedDate: item.volumeInfo.publishedDate,
        image: item.volumeInfo?.imageLinks?.smallThumbnail || item.volumeInfo?.imageLinks?.thumbnail ||'No image'
      });
    });
    return data;
  }
  
  addBookToFavorites(book: Book) {
    this.bookService.addToFavorites(book);
  }
  
  getAllFavorites() {
    const favorites = this.bookService.getAllFavorites();
  }
}
