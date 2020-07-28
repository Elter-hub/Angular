import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comment} from '../model/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsComponent  {
  comments: Comment[];

  constructor(private activatedRoute: ActivatedRoute){
    this.activatedRoute.data.subscribe(data => this.comments = data.comments);
  }
}
