import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from '../../users/users/users.component';
import {UsersResolverService} from '../../users/services/resolvers/users-resolver.service';
import {UserFormComponent} from '../../users/user-form/user-form.component';
import {PostsComponent} from '../posts/posts.component';
import {PostResolverService} from '../services/post-resolver.service';
import {PostFormComponent} from '../post-form/post-form.component';

const routes: Routes = [
  {
    path: '', component: PostsComponent, resolve: {posts: PostResolverService}, children: [
      {path: 'form', component: PostFormComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoutingModule { }
