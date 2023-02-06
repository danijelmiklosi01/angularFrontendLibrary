import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { DataServiceService } from 'src/app/services/data-service.service';
@Component({
  selector: 'user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})

  export class UsersPageComponent implements OnInit {
    public user: User;
    public editUser: boolean = false;
    

    constructor(private router: Router, private dataService: DataServiceService) { }
    
    ngOnInit(): void {
      console.log("Trazi uzere");
      this.dataService.getUsers().subscribe(
        (res) => {        
          console.log("Nastavi dalje sa tim podacima");
        }
      );
    }
    
  public edit() {
      if (this.editUser == true) {
        this.editUser = false;
      }
      else {
        this.editUser = true;
        this.user = new User();
      }
    }
    public add(){
      this.dataService.AddUser(this.user).subscribe()
    }
  }