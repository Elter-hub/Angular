import { Component } from '@angular/core';
import {UsersResolverService} from '../../../services/resolvers/usersResolver.service';
import {ManipulatingUsersArrayService} from '../../../services/manipulatingUsersArray.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  options = [
    'by Name',
    'by Id',
    'by Email',
  ]

  constructor(private manipulatingUsersArray: ManipulatingUsersArrayService) {
    this.manipulatingUsersArray.currentUsers.subscribe(value => console.log(value))
  }


  filterByEmail(email: string) {
    this.manipulatingUsersArray.filterByEmail(email);
  }
}
