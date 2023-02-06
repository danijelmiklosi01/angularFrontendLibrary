import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersPageComponent } from './components/user-page/user-page.component';
import { DataServiceService } from './services/data-service.service';
import { UsersOverviewComponent } from './components/user-overview/user-overview/user-overview.component';
import { UsersListComponent } from './components/user-list/user-list/user-list.component';
import { UsersListItemComponent } from './components/user-list-item/user-list-item/user-list-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookPageComponent } from './components/book-page/book-page/book-page.component';
import { BookListComponent } from './components/book-list/book-list/book-list.component';
import { BookListItemComponent } from './components/book-list-item/book-list-item/book-list-item.component';
import { UserDetailsComponent } from './components/user-details/user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { BookDetailsComponent } from './components/book-details/book-details/book-details.component';





@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
    UsersOverviewComponent,
    UsersListComponent,
    UsersListItemComponent,
    BookPageComponent,
    BookListComponent,
    BookListItemComponent,
    UserDetailsComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
    
    
    
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
