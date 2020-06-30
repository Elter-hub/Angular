import {Component, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {
  arrayOfComments: any[];
  @Input()
  oneComment: any;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe(response => this.arrayOfComments = response);
  }

}
