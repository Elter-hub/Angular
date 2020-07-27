import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../model/post';
import {FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY} from '@angular/cdk/scrolling';

export class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
  constructor() {
    // This 👇👇👇 probably do nothing
    super(100, 50, 200);
  }
}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy}]
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(manyPosts => this.posts = manyPosts.posts);
  }

  ngOnInit(): void {
  }

}
