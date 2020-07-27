import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: 'users', loadChildren: () => import('./../users/user.module').then(m => m.UserModule)},
      {path: 'posts', loadChildren: () => import('./../post/post.module').then((m => m.PostModule))},
      {path: 'comments', loadChildren: () => import('./../comment/comment.module').then((m => m.CommentModule))},
    ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
