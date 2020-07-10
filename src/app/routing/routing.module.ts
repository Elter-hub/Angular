import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {UsersComponent} from '../users/users.component';
import {UsersResolverService} from '../resolvers/users-resolver.service';
import {SingleUserComponent} from '../single-user/single-user.component';
import {UserCheckService} from '../users/services/userChecker.service';
import {SingleUserResolverService} from '../resolvers/single-user-resolver.service';
import {PostsComponent} from '../posts/posts.component';
import {PostResolverService} from '../resolvers/posts-resolver.service';
import {AllPostResolverService} from '../resolvers/allPostsResolver.service';

const appRoutes: Routes = [
        {path: 'users', component: UsersComponent, resolve: {users: UsersResolverService} },
        {path: 'user/:id', component: SingleUserComponent,
        canActivate: [UserCheckService], resolve: {users: SingleUserResolverService} ,children: [
            {path: 'posts', component: PostsComponent, resolve: {posts: PostResolverService}},
          ]},
        {path: 'allPosts', component: PostsComponent, resolve: {posts: AllPostResolverService} },
        {path: '**', redirectTo: 'users'}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule {}
