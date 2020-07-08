import {Component} from '@angular/core';
import {UserService} from '../services/user.service';
import {Post} from '../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent   {
  isShowComments = false;
  postCommentsArray: Comment1[];

  @Input()
  post: Post;

  constructor(private postService: UserService) {  }

  onShowComments(id: number) {
    this.isShowComments = !this.isShowComments;
    this.postService.getPostComments(id).subscribe(value => this.postCommentsArray = value) ;
  }
}
