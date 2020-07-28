import { Component, ChangeDetectionStrategy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../model/post';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent {
  posts: Post[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(manyPosts => this.posts = manyPosts.posts);
  }
}
