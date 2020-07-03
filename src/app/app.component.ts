import {Component} from '@angular/core';
import {UserService} from './services/user.service';
import {User} from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrayOfUsers: User[];

  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(response => this.arrayOfUsers = response);
  }
}
