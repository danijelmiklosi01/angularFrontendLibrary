import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {

  @Input() book: Book;
  
  

  constructor(public dataService: DataServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  public get bookCount() {
    return this.dataService.books.length;
  }

  public GotoDetails() {
    this.router.navigate(['book/' + this.book.id]);

  }
}