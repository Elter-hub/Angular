import { Component } from '@angular/core';
import {User} from '../models/User';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
  usersArray: User[];

  constructor(private activatedRoute: ActivatedRoute,
              private route: Router) {
    this.activatedRoute.data.subscribe(value => this.usersArray = value.users)
  }

  showDetails(user: User) {
    this.route.navigate(['user', user.id], {state: {user}})
  }
}
