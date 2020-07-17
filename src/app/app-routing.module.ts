import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './component/user/user.component';
import {UserFormComponent} from './component/forms/user-form/user-form.component';
import {UsersResolverService} from './services/resolvers/usersResolver.service';
import {PostComponent} from './component/post/post.component';
import {PostResolverService} from './services/resolvers/postResolver.service';
import {PostFormComponent} from './component/forms/post-form/post-form.component';
import {CommentsFormComponent} from './component/forms/comments-form/comments-form.component';
import {CommentsComponent} from './component/comments/comments.component';
import {CommentsResolverService} from './services/resolvers/commentsResolver.service';

const routes: Routes = [
  {path: '', component: UserFormComponent, children: [
      {path: 'Users', component: UserComponent, resolve: {users: UsersResolverService}}
    ]},
  {path: 'Posts', component: PostFormComponent, children: [
    {path: '', component: PostComponent, resolve: {posts: PostResolverService}}
  ]},
  {path: 'Comments', component: CommentsFormComponent, children: [
      {path: '', component: CommentsComponent, resolve: {comments: CommentsResolverService}}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
