import {Component} from '@angular/core';
import {User} from '../models/User';
import {UserService} from '../services/user.service';
import {DataService} from '../services/data.service';
import {UserPostsService} from '../services/userPosts.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  usersArray: User[];
  userId: number
  postId: number

  constructor(private userService: UserService,
              private dataService: DataService,
              private postService: UserPostsService) {
    this.userService.getAllUsers().subscribe(value => this.usersArray = value) ;
    this.dataService.currentId.subscribe(number => this.userId = number );
    this.dataService.currentId.subscribe(number => this.postId = number );
  }

  showDetails(id: number) {
    this.dataService.changeUserId(id);
  }

  showUserPosts(id: number) {
    this.postService.changeUserId(id);
  }
}
