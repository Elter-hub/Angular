import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {FilterPostsService} from '../../../services/filterPosts.service';
import {Post} from '../../../models/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  options = [
    'Users',
    'Posts',
    'Comments'
  ];

  constructor(private router: Router,
              private filterPostsService: FilterPostsService) { }

  onSelect(option: string): void {
    this.router.navigate([option]);
  }

  filterById(value: number): Post[] {
    return  this.filterPostsService.filterById(value);
  }
}
