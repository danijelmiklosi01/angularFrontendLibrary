import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './services/data-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontIspitDanijelMiklosi';
  constructor(public dataService: DataServiceService) { }

  public ngOnInit(): void {
      
      this.dataService.getUsers().subscribe();
      this.dataService.getBooks().subscribe();
  }
}
