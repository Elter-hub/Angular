import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CommentsComponent} from '../comments/comments.component';
import {CommentResolverService} from '../services/comment-resolver.service';

const routes: Routes = [
  {
    path: '', component: CommentsComponent, resolve: {comments: CommentResolverService}
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CommentRoutingModule { }
