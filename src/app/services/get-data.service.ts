import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {Post} from '../models/post';
import {Comments } from '../models/comments';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`);
  }

  getAllComments(): Observable<Comments[]> {
    return this.httpClient.get<Comments[]>(`https://jsonplaceholder.typicode.com/comments`);
  }
}
