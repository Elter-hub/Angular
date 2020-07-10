import {Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {GetDataService} from '../users/services/getData.service';
import {Post} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<Post[]>{
  userId: number;

  constructor(private activatedRoute: ActivatedRoute,
              private getDataService: GetDataService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> | Promise<Post[]> | Post[] {
    this.activatedRoute.data.subscribe(value => {
      this.userId = history.state.user.id;
    });
    return this.getDataService.getUserPosts(this.userId);
  }






}
