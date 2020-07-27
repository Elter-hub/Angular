import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from '../posts/posts.component';
import {PostResolverService} from '../services/post-resolver.service';

const routes: Routes = [
  {
    path: '', component: PostsComponent, resolve: {posts: PostResolverService}
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoutingModule { }
