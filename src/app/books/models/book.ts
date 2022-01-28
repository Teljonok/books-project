
//common interface for books

export class Book {
  id: string;
  title: string;
  subtitle: string;
  authors: Array<string>;
  publishedDate: Date | string;
  image: string;
}

export interface volumeInfo {
  title: string;
  authors: Array<string>;
}

// "kind": "books#volume",
//   "id": "RJxWIQOvoZUC",
//   "etag": "NsxMT6kCCVs",
//   "selfLink": "https://www.googleapis.com/books/v1/volumes/RJxWIQOvoZUC",
//   "volumeInfo": {
//   "title": "Flowers",
//     "authors": [
//     "Gail Saunders-Smith"
//   ],
