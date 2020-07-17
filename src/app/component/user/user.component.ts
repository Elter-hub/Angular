import {Component, DoCheck } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/User';
import {ManipulatingUsersArrayService} from '../../services/manipulatingUsersArray.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements DoCheck {
  users: User[];

  constructor(private activatedRoute: ActivatedRoute,
              private manipulatingUsersArrayService: ManipulatingUsersArrayService) {
    this.activatedRoute.data.subscribe(value => this.users = value.users);
    this.manipulatingUsersArrayService.changeArray(this.users);
  }

  ngDoCheck(): void {
    this.manipulatingUsersArrayService.currentUsers.subscribe(value => this.users = value);
  }

}
