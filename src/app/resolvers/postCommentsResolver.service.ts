import {Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {GetDataService} from '../services/getData.service';
import { Commentt } from '../models/commentt';

@Injectable({
  providedIn: 'root'
})
export class PostCommentsResolverService implements Resolve<Commentt[]>{
  userId: number;

  constructor(private activatedRoute: ActivatedRoute,
              private getDataService: GetDataService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Commentt[]> | Promise<Commentt[]> | Commentt[] {
    this.activatedRoute.data.subscribe(value => {
      this.userId = history.state.post.id;

    });
    return this.getDataService.getPostComments(this.userId);
  }
}
