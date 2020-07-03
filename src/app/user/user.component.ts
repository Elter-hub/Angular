import {Component, Input} from '@angular/core';
import {User} from '../models/User';
import {UserService} from '../services/user.service';
import {Post} from '../models/Post';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  arrayOfUserPosts: Post[];
  isDisplayed = false;
  @Input()
  user: User;

  constructor(private userService: UserService) {
  }

  onShowPosts(userId: number) {
    this.isDisplayed = !this.isDisplayed;
    this.userService.getUserPosts(userId).subscribe(value => this.arrayOfUserPosts = value) ;
  }
}
