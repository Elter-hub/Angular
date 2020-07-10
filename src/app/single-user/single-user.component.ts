import {Component} from '@angular/core';
import {User} from '../models/User';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent {
  singleUser: User;
  isShowUserPosts: boolean = false;

  constructor(private route: Router,
              private activatedRoute: ActivatedRoute) {
      this.activatedRoute.params.subscribe(value => {
      this.singleUser = history.state.user;
    })
  }

  showUserPosts(user: User) {
    this.isShowUserPosts = !this.isShowUserPosts;
    this.route.navigate(['posts'], {relativeTo: this.activatedRoute, state: {user}})
  }
}
