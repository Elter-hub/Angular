import { Component } from '@angular/core';
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
