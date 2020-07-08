import { Component } from '@angular/core';
import {UserService} from '../services/user.service';
import {Post} from '../models/Post';
import {UserPostsService} from '../services/userPosts.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent  {
  postsArray: Post[];
  userId: number;

  constructor(private userService: UserService,
              private postsService: UserPostsService) {
    this.postsService.currentId.subscribe(number => this.userId = number);
    this.userService.getUserPosts(this.userId).subscribe(value => this.postsArray = value) ;
  }



}
