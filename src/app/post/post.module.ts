import { NgModule } from '@angular/core';
import {RoutingModule} from './routing/routing.module';
import { PostsComponent } from './posts/posts.component';
import { OnePostComponent } from './one-post/one-post.component';
import {FetchPostDataService} from './services/fetch-post-data.service';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [PostsComponent, OnePostComponent],
    imports: [
        CommonModule,
        RoutingModule,
        ScrollingModule,
        MatCardModule,
    ],
    exports: [
        OnePostComponent
    ],
    providers: [FetchPostDataService]

})
export class PostModule { }
