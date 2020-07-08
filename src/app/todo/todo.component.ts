import { Component, OnInit } from '@angular/core';
import {Comment1} from '../models/Comment1';
import {UserService} from '../services/user.service';
import {Todos} from '../models/Todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todosArray: Todos[];

  constructor(private commentService: UserService) {
    this.commentService.getTodos().subscribe(value => this.todosArray = value);
  }
}
