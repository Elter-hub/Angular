import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ManipulatingUsersArrayService} from '../../../services/manipulatingUsersArray.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent  {
  options = [
    'Users',
    'Posts',
    'Comments'
  ];

  constructor(private router: Router,
              private manipulatingUsersArrayService: ManipulatingUsersArrayService) { }

  onSelect(option: string): void {
    this.router.navigate([option]);
  }

  filterByEmail(email: string): any {
    this.manipulatingUsersArrayService.filterByEmail(email);
  }

}
