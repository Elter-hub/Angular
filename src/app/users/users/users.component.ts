import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../model/user';
import {ExchangeDataService} from '../services/exchange-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class UsersComponent  {
  allUsers: User[];
  users: User[];

  constructor(private activatedRoute: ActivatedRoute,
              private exchangeDataService: ExchangeDataService) {
    this.activatedRoute.data.subscribe(manyUsers => this.allUsers = manyUsers.users);
    this.exchangeDataService.changeArray(this.allUsers);
    this.exchangeDataService.currentUsers.subscribe(singleUser => this.users = singleUser);
  }
}
