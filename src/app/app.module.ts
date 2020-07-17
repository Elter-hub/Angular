import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { PostComponent } from './component/post/post.component';
import { CommentsComponent } from './component/comments/comments.component';
import { CommentsFormComponent } from './component/forms/comments-form/comments-form.component';
import { PostFormComponent } from './component/forms/post-form/post-form.component';
import { UserFormComponent } from './component/forms/user-form/user-form.component';
import {GetDataService} from './services/get-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {ManipulatingUsersArrayService} from './services/manipulatingUsersArray.service';
import {FormsModule} from '@angular/forms';
import {PostResolverService} from './services/resolvers/postResolver.service';
import {MatButtonModule} from '@angular/material/button';
import {FilterPostsService} from './services/filterPosts.service';
import {CommentsResolverService} from './services/resolvers/commentsResolver.service';
import {MatDividerModule} from '@angular/material/divider';
import {FilterCommentsService} from './services/filterComments.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    CommentsComponent,
    CommentsFormComponent,
    PostFormComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [GetDataService, ManipulatingUsersArrayService, PostResolverService, FilterPostsService,
    CommentsResolverService, FilterCommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
