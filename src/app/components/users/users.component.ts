import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from '../../models/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersResolverService} from '../../services/resolvers/usersResolver.service';
import {ManipulatingUsersArrayService} from '../../services/manipulatingUsersArray.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements DoCheck{
  users: User[];

  constructor(private activatedRoute: ActivatedRoute,
              private manipulatingUsersArrayService: ManipulatingUsersArrayService,
              private router: Router) {
    this.activatedRoute.data.subscribe(value => this.users = value.users);
    this.manipulatingUsersArrayService.changeArray(this.users)
  }


  removeUser(index: number) {
    this.users.splice(index, 1);
    this.manipulatingUsersArrayService.changeArray(this.users);
  }

  ngDoCheck(): void {
    this.manipulatingUsersArrayService.currentUsers.subscribe(value => this.users = value);
  }

  editUser(user: User) {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute, state: {user}})
  }
}
