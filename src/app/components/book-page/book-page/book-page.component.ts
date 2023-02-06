import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  public book: Book;
  public editBook: boolean = false;
  constructor(private router: Router, private dataService: DataServiceService) { }

  ngOnInit(): void {
  }
  public edit() {
    if (this.editBook == true) {
      this.editBook = false;
    }
    else {
      this.editBook = true;
      this.book = new Book();
    }
  }
  public add(){
    this.dataService.AddBook(this.book).subscribe()
  }
}

