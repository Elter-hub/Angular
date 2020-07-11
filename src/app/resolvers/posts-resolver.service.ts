import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {GetDataService} from '../services/getData.service';
import {Post} from '../models/post';
import {UserIdService} from '../services/userId.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<Post[]>{
  userId: number;

  constructor(private userIdentificator: UserIdService,
              private getDataService: GetDataService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> | Promise<Post[]> | Post[] {
        this.userIdentificator.currentId.subscribe(uId => this.userId = uId);
        return this.getDataService.getUserPosts(this.userId);
  }
}
