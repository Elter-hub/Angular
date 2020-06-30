import { BrowserModule } from '@angular/platform-browser';
import {Input, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CommentComponent } from './comment/comment.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  arrayOfPosts: any[];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => this.arrayOfPosts = response);
  }
}
