import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'users-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UsersListItemComponent implements OnInit {

  @Input() user: User;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public GotoDetails() {
    this.router.navigate(['user/' + this.user.id]);

  }
}