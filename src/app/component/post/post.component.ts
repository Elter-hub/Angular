import {Component, DoCheck} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../models/post';
import {FilterPostsService} from '../../services/filterPosts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements DoCheck{
  userPosts: Post[];
  isShow = false;

  constructor(private activatedRoute: ActivatedRoute,
              private filterPostsService: FilterPostsService) {
    this.activatedRoute.data.subscribe(value => this.userPosts = value.posts);
    this.filterPostsService.changeArray(this.userPosts);
  }

  ngDoCheck(): void {
    this.filterPostsService.currentPosts.subscribe(value => this.userPosts = value);
  }

}
