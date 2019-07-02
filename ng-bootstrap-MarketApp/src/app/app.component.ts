import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { DataService } from './data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  users$: UserService[];
  constructor(private dataService: DataService) {}
  
  ngOnInit() {
    return this.dataService.getUsers()
    .subscribe(data => this.users$ = data);
  }
}
