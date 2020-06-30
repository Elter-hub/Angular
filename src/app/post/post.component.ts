import {Component, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {
  arrayOfPosts: any[];

  @Input()
  onePost: any;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => this.arrayOfPosts = response);
  }
}
