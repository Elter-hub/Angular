import {Injectable} from '@angular/core';
import {User} from '../models/User';
import {Post} from '../models/post';
import {Commentt} from '../models/commentt';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserPosts(userId: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }

  getSingleUser(userId: number): Observable<User> {
    return this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }

  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`);
  }

  getPostComments(postId: number): Observable<Commentt[]> {
    return this.httpClient.get<Commentt[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  }

  getAllComments(): Observable<Commentt[]> {
    return this.httpClient.get<Commentt[]>(`https://jsonplaceholder.typicode.com/comments`);
  }


}
