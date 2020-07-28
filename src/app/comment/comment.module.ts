import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { OneCommentComponent } from './one-comment/one-comment.component';
import {FetchCommentsDataService} from './services/fetch-comments-data.service';
import {CommentResolverService} from './services/comment-resolver.service';
import {CommentRoutingModule} from './comment-routing/comment-routing.module';
import {MatCardModule} from '@angular/material/card';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [ CommentsComponent, OneCommentComponent],
    imports: [
        CommonModule,
        CommentRoutingModule,
        MatCardModule,
        ScrollingModule
    ],
  providers: [FetchCommentsDataService, CommentResolverService]
})
export class CommentModule { }
