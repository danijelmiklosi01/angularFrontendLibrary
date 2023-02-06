import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UsersOverviewComponent implements OnInit {

  constructor(public dataService: DataServiceService) { }

  ngOnInit(): void {
  }

  public get userCount() {
    return this.dataService.users.length;
  }
}

