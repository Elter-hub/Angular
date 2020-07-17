import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FilterCommentsService} from '../../../services/filterComments.service';
import {Comments} from '../../../models/comments';

@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.css']
})
export class CommentsFormComponent implements OnInit {
  options = [
    'Users',
    'Posts',
    'Comments'
  ];
  constructor(private router: Router,
              private filterCommentsService: FilterCommentsService) { }

  ngOnInit(): void {
  }

  onSelect(option: any): void {
    this.router.navigate([option]);
  }

  filterById(someNumber: number): Comments[] {
    return this.filterCommentsService.filterById(someNumber);
  }
}
