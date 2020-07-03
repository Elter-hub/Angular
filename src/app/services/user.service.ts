import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';
import {Observable} from 'rxjs';
import {Post} from '../models/Post';
import {Comment1} from '../models/Comment1';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserPosts(userId: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }

  getPostComments(postId: number): Observable<Comment1[]> {
    return this.httpClient.get<Comment1[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  }
}
