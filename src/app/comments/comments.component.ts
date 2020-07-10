import { Component } from '@angular/core';
import {Commentt} from '../models/commentt';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  allCommentsArray: Commentt[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.allCommentsArray = value.comments)
  }

}
