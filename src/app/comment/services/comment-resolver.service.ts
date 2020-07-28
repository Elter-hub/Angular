import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Comment} from '../model/comment';
import {Observable} from 'rxjs';
import {FetchCommentsDataService} from './fetch-comments-data.service';

@Injectable({
  providedIn: 'root'
})
export class CommentResolverService implements Resolve<Comment[]>{

  constructor(private fetchCommentsDataService: FetchCommentsDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comment[]> | Promise<Comment[]> | Comment[] {
    return this.fetchCommentsDataService.getAllComments();
  }
}
