import {Component} from '@angular/core';
import {UserService} from '../services/user.service';
import {Post} from '../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent   {
  postArray: Post[];

  constructor(private postService: UserService) {
    this.postService.getAllPosts().subscribe(value => this.postArray = value) ;
  }

}
