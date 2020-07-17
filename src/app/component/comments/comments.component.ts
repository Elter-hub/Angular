import {Component, DoCheck} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comments} from '../../models/comments';
import {FilterCommentsService} from '../../services/filterComments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements DoCheck {
  comments: Comments[];

  constructor(private activatedRoute: ActivatedRoute,
              private filterCommentsService: FilterCommentsService) {
    this.activatedRoute.data.subscribe(value => this.comments = value.comments );
    this.filterCommentsService.changeArray(this.comments);
  }

  ngDoCheck(): void {
    this.filterCommentsService.currentComments.subscribe(value => this.comments = value);
  }
}
