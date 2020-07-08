import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {DataService} from '../services/data.service';
import {User} from '../models/User';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent  {
  singleUser: User;
  userId: number

  constructor(private dataService: DataService,
              private userService: UserService) {
    this.dataService.currentId.subscribe(number => this.userId = number );
    this.userService.getSingleUser(this.userId).subscribe(user => this.singleUser = user)
  }




}
