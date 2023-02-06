import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Book } from 'src/app/models/book';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Observable, subscribeOn } from 'rxjs';
import { BookCopy } from 'src/app/models/bookCopy';
@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public user: User;
  public books: Book[];
  public bookCopies: BookCopy[];
  public id: number;
  public editUser: boolean = false;
  public userID: User;
  public book: Book;
  public bookCopyID: BookCopy;
  public btnAvailable: boolean = false;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, public dataService: DataServiceService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.id = parseInt(params["id"]);
        if (this.dataService.users != null)
          this.user = this.dataService.users.find(u => u.id == this.id);
        if (this.user == null)
          this.dataService.GetUserByID(this.id).subscribe(
            (res) => {console.log(res);
              this.user = res;
              
            }
          );
      }
    )
    this.dataService.getBookCopies().subscribe(
      res=>{
        console.log(res);
        this.bookCopies= res;
        
    const uniqueBooks = new Set<string>();
      const uniqueBookCopies = [];
      for (const bookCopy of this.bookCopies) {
        const book = this.dataService.bookCopyToBook(bookCopy.bookID);
        const bookKey = `${book.title} ${book.author}`;
        if (!uniqueBooks.has(bookKey)) {
          uniqueBooks.add(bookKey);
          uniqueBookCopies.push(bookCopy);
        }
      }
      this.bookCopies = uniqueBookCopies;
    }
  );
}
  

  public AvailableBooks() {
    if (this.btnAvailable == true) {
      this.btnAvailable = false;
    }
    else {
      this.btnAvailable = true;
    }
  }
  public edit() {
    if (this.editUser == true) {
      this.editUser = false;
    }
    else {
      this.editUser = true;
    }
  }
  public delete(){
    this.dataService.DeleteUser(this.user.id).subscribe(() => {
      this.router.navigate(['/users']);
  });
  }
  public save(){
    this.dataService.SaveUser(this.user).subscribe(() => {
      this.router.navigate(['/users']);
  });
  }
  public onReturnBook(bookID: number) {
    this.dataService.returnBook(this.user.id, bookID)
      .subscribe(() => {
        this.router.navigate(['/users']);
    });
  }
  public availableBooks(){
    this.dataService.getAvailableBookCopies().subscribe((res) => {
      console.log("Stigle dostupne knjige")
      console.log(res)
  });
  }
  public rent(bookID: number){
    this.dataService.rentBook(this.user.id, bookID).subscribe(() => {
      if(this.user.rentedBooks.findIndex(b => b.bookID == bookID) === -1) {
        this.dataService.rentBook(this.user.id, bookID).subscribe(() => {
          this.router.navigate(['/users'])
        })
      } else {
        console.log('Knjiga je vec rentana od strane korisnika.');
      }
    })

  }
  public canRent(book: BookCopy): boolean {
    return this.user.rentedBooks.findIndex(b => b.bookID === book.bookID) === -1;
  }
  
  
  
}

