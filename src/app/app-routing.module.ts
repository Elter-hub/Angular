import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {PostsFormComponent} from './components/forms/posts-form/posts-form.component';
import {CommentsFormComponent} from './components/forms/comments-form/comments-form.component';
import {UserFormComponent} from './components/forms/user-form/user-form.component';
import {UsersResolverService} from './services/resolvers/usersResolver.service';
import {EditUserComponent} from './components/edit-user/edit-user.component';


const routes: Routes = [
  {path: 'users',  component: UsersComponent, resolve: {users: UsersResolverService}, children: [
      {path: 'edit', component: EditUserComponent}
    ]},
  {path: 'form',  component: UserFormComponent, outlet: 'form' },
  {path: 'posts', component: PostsFormComponent},
  {path: 'comments', component: CommentsFormComponent},
  {path: '**', redirectTo: 'users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
