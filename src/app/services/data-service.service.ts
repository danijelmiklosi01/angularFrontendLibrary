import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Inject, Injectable, resolveForwardRef } from '@angular/core';
import {map} from 'rxjs';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { User } from '../models/user';
import { BookCopy } from '../models/bookCopy';
import { catchError, throwError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public tenant = "danijel-miklosi";
  public baseUrl: string = "https://vebdizajneducons.info/";
  public users: User[];
  public books: Book[];
  public bookCopies: BookCopy[];
  public tenantHeader={headers: new HttpHeaders({"tenant": this.tenant})};
  constructor(public httpClient: HttpClient) { 

  }
  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl+"users", this.tenantHeader).pipe(
      map((res)=>
      {
        this.users = res;
        return res;
      }));
  }
  public AddUser(user: User): Observable<User>{
    console.log("Update User by ID");
    return this.httpClient.post<User>(this.baseUrl+"add-user", user, this.tenantHeader).pipe(
      map(
        (res) => {
          return res;
        }
      ), catchError((err) => {
        console.log("cuvanje nije uspelo!")
        return throwError(err);
      })
    )
  }
  public getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.baseUrl+"books", this.tenantHeader).pipe(
      map((res)=>
      {
        this.books = res;
        return res;
      }));

}
public GetUserByID(id: number): Observable<User> {
  
  return this.httpClient.get<User>(this.baseUrl+"get-user/"+id, this.tenantHeader).pipe(
    map(
      (res) => {
        
        var existingUserIndex = (this.users != null) ? this.users.findIndex(f => f.id == id) : -1;
        if (existingUserIndex >= 0) {
          this.users.splice(existingUserIndex, 1, res);
        }
        else {
          if (this.users == null)
            this.users = [];
          this.users.push(res);
        }
        
        return res;
      }
    ), catchError((err) => {
      alert("Korisnik ne postoji");
      console.log("nista ne valja");
      return throwError(err);  
    })
  )
}
public SaveUser(user: User): Observable<User>{
  console.log("Update User by ID");
  return this.httpClient.post<User>(this.baseUrl+"edit-user", user, this.tenantHeader).pipe(
    map(
      (res) => {
        return res;
      }
    ), catchError((err) => {
      console.log("cuvanje nije uspelo!")
      return throwError(err);
    })
  )
}
public DeleteUser(id: number): Observable<User>{
  return this.httpClient.delete<User>(this.baseUrl+"delete-user/"+id, this.tenantHeader).pipe(
    map(
      (res)=>{
        return res;
      }
    ), catchError((err) => {
      console.log("brisanje nije uspelo!")
      return throwError(err);
    }
  )
  )
}
public GetBookByID(id: number): Observable<Book> {
  console.log("Request Book by ID");
  return this.httpClient.get<Book>(this.baseUrl+"get-book/"+id, this.tenantHeader).pipe(
    map(
      (res) => {
        console.log("stigao Book " + id);
        var existingUserIndex = (this.books != null) ? this.books.findIndex(f => f.id == id) : -1;
        if (existingUserIndex >= 0) {
          this.books.splice(existingUserIndex, 1, res);
        }
        else {
          if (this.books == null)
            this.books = [];
          this.books.push(res);
        }
        console.log(this.books);
        return res;
      }
    ), catchError((err) => {
      alert("Knjiga ne postoji");
      console.log("nista ne valja");
      return throwError(err);  
    })
  )
}
public DeleteBook(id: number): Observable<Book>{
  return this.httpClient.delete<Book>(this.baseUrl+"delete-book/"+id, this.tenantHeader).pipe(
    map(
      (res)=>{
        return res;
      }
    ), catchError((err) => {
      console.log("brisanje nije uspelo!")
      return throwError(err);
    }
  )
  )
}
public SaveBook(book: Book): Observable<Book>{
  console.log("Update Book by ID");
  return this.httpClient.post<Book>(this.baseUrl+"edit-book", book, this.tenantHeader).pipe(
    map(
      (res) => {
        return res;
      }
    ), catchError((err) => {
      console.log("cuvanje nije uspelo!")
      return throwError(err);
    })
  )
}
public AddBook(book: Book): Observable<Book>{
  console.log("Update Book by ID");
  return this.httpClient.post<Book>(this.baseUrl+"add-book", book, this.tenantHeader).pipe(
    map(
      (res) => {
        return res;
      }
    ), catchError((err) => {
      console.log("cuvanje nije uspelo!")
      return throwError(err);
    })
  )
}
public getBookCopies(): Observable<BookCopy[]> {
  return this.httpClient.get<BookCopy[]>(this.baseUrl+"book-copies", this.tenantHeader).pipe(
    map((res)=>
    {
      this.bookCopies = res;
      return res;
    }));

}
public bookCopyToBook(id) {
  return this.books.find(b=>b.id==id);
} 
public returnBook(userID: number, bookID: number): Observable<boolean>{
  return this.httpClient.post<boolean>(this.baseUrl+"return-book/"+userID+"/"+bookID, {}, this.tenantHeader).pipe(
    map(
      (res)=>{
        console.log("vracanje je uspelo!")
        return res;
        
      }
    ), catchError((err) => {
      console.log("vracanje nije uspelo!")
      return throwError(err);
    }
  )
  )
}

public getAvailableBookCopies(): Observable<BookCopy[]>{
  return this.httpClient.get<BookCopy[]>(this.baseUrl+"available-book-copies", this.tenantHeader).pipe(
    map((res)=>
    {
      this.bookCopies = res;
      return res;
    }));
}
public rentBook(userID: number, bookID:number): Observable<any>{
  return this.httpClient.post<any>(this.baseUrl+"rent-book/"+userID+"/"+bookID, {}, this.tenantHeader).pipe(
    map(
      (res)=>{
        console.log("rentanje je uspelo!")
        return res;
        
      }
    ), catchError((err) => {
      console.log("rentanje nije uspelo!")
      return throwError(err);
    }
  )
  )
}
}


