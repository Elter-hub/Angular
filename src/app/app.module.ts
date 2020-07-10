import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommentsComponent } from './comments/comments.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import {GetDataService} from './users/services/getData.service';
import { SingleUserComponent } from './single-user/single-user.component';
import {UsersResolverService} from './resolvers/users-resolver.service';
import {PostResolverService} from './resolvers/posts-resolver.service';
import {SingleUserResolverService} from './resolvers/single-user-resolver.service';
import {UserCheckService} from './users/services/userChecker.service';
import {RoutingModule} from './routing/routing.module';
import { AllPostsComponent } from './all-posts/all-posts.component';
import {AllPostResolverService} from './resolvers/allPostsResolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommentsComponent,
    UsersComponent,
    PostsComponent,
    SingleUserComponent,
    AllPostsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [GetDataService, UsersResolverService, SingleUserResolverService,
              PostResolverService, UserCheckService, AllPostResolverService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
