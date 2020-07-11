import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
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
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UserIdService} from './services/userId.service';
import { FirstComponentComponent } from './first-component/first-component.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CommentsComponent,
    UsersComponent,
    PostsComponent,
    SingleUserComponent,
    HomeComponent,
    FirstComponentComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DragDropModule
  ],
  providers: [GetDataService, UsersResolverService, SingleUserResolverService, PostResolverService, UserIdService,
    UserCheckService, AllPostResolverService, AllCommentsResolverService, PostCommentsResolverService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
