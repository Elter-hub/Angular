import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {UserComponent} from './user/user.component';
import {HomeComponent} from './home/home.component';
import {CommentComponent} from './comment/comment.component';
import {PostComponent} from './post/post.component';
import {TodoComponent} from './todo/todo.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent, pathMatch: 'full' },
  {path: 'users', component: UserComponent },
  {path: 'posts', component: PostComponent},
  {path: 'comments', component: CommentComponent},
  {path: 'todos', component: TodoComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
