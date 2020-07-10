import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { CommentsComponent } from './comments/comments.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import {GetDataService} from './services/getData.service';
import { SingleUserComponent } from './single-user/single-user.component';
import {UsersResolverService} from './resolvers/users-resolver.service';
import {PostResolverService} from './resolvers/posts-resolver.service';
import {SingleUserResolverService} from './resolvers/single-user-resolver.service';
import {UserCheckService} from './services/userChecker.service';
import {RoutingModule} from './routing/routing.module';
import {AllPostResolverService} from './resolvers/allPostsResolver.service';
import {AllCommentsResolverService} from './resolvers/allCommentsResolver.service';
import {PostCommentsResolverService} from './resolvers/postCommentsResolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommentsComponent,
    UsersComponent,
    PostsComponent,
    SingleUserComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [GetDataService, UsersResolverService, SingleUserResolverService, PostResolverService,
    UserCheckService, AllPostResolverService, AllCommentsResolverService, PostCommentsResolverService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
