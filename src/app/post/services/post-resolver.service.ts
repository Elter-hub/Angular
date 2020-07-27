import { Injectable } from '@angular/core';
import {FetchPostDataService} from './fetch-post-data.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Post} from '../model/post';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<Post[]>{

  constructor(private fetchPostDataService: FetchPostDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> | Promise<Post[]> | Post[] {
    return this.fetchPostDataService.getAllPosts();
  }
}
