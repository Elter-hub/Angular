import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {
  userPosts: Post[];
  isShow: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private route: Router) {
    this.activatedRoute.data.subscribe(value => this.userPosts = value.posts)
  }

  showAll() {
    this.isShow = !this.isShow;
  }

  showComments(post: Post) {
    this.route.navigate(['post', post.id], {state: {post}})
  }
}
