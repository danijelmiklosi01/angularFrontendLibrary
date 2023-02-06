import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  public book: Book;
  public id: number;
  public editBook: boolean = false;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: DataServiceService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.id = parseInt(params["id"]);
        if (this.dataService.books != null)
          this.book = this.dataService.books.find(b => b.id == this.id);
        if (this.book == null)
          this.dataService.GetBookByID(this.id).subscribe(
            (res) => {
              this.book = res;
              console.log(res);
            }
          );
      }
    )
  }

  public edit() {
    if (this.editBook == true) {
      this.editBook = false;
    }
    else {
      this.editBook = true;
    }
  }
  public delete(){
    this.dataService.DeleteBook(this.book.id).subscribe(() => {
      this.router.navigate(['/books']);
  });
    
  }
  public save(){
    this.dataService.SaveBook(this.book).subscribe(() => {
      this.router.navigate(['/books']);
  });

  }
}
