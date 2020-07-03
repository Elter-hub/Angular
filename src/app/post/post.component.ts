import {Component, Input, Output} from '@angular/core';
import {UserService} from '../services/user.service';
import {PostService} from '../services/post.service';
import {Post} from '../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent   {
  userPostsArray: Post[];


  constructor(private postService: PostService) {
    this.postService.getUserPosts(this.userID).subscribe(response => this.userPostsArray = response);
    console.log(this.userID + ' ot blya');
    console.log(this.userPostsArray + ' ot blya');
  }
}
