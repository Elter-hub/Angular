import {Component} from '@angular/core';
import {Comment1} from '../models/Comment1';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {
  allCommentsArray: Comment1[];
  isShorten: boolean = true;

  constructor(private commentService: UserService) {
    this.commentService.getAllComments().subscribe(value => this.allCommentsArray = value) ;
  }

  showMore() {
    this.isShorten = !this.isShorten;
  }
}
