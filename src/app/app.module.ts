import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { CommentComponent } from './comment/comment.component';
import { PostComponent } from './post/post.component';

import {UserService} from './services/user.service';
import { UserComponent } from './user/user.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './routing.module';
import {TodoComponent} from './todo/todo.component';
import {DataService} from './services/data.service';
import {SingleUserComponent} from './single-user/single-user.component';
import {UserPostsComponent} from './user-posts/user-posts.component';
import {UserPostsService} from './services/userPosts.service';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    PostComponent,
    UserComponent,
    HomeComponent,
    TodoComponent,
    SingleUserComponent,
    UserPostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,

  ],
  providers: [UserService, DataService, UserPostsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
