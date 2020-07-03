import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { CommentComponent } from './comment/comment.component';
import { PostComponent } from './post/post.component';

import {UserService} from './services/user.service';
import {PostService} from './services/post.service';
import {CommentService} from './services/comment.service';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    PostComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService, PostService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
