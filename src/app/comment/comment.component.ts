import {Component} from '@angular/core';
import {Comment1} from '../models/Comment1';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {

  @Input()
  comment: Comment1;
}
