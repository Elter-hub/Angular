import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {GetDataService} from '../services/getData.service';
import {Post} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class AllPostResolverService implements Resolve<Post[]>{

  constructor(private activatedRoute: ActivatedRoute,
              private getDataService: GetDataService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> | Promise<Post[]> | Post[] {
    return this.getDataService.getAllPosts();
  }
}
