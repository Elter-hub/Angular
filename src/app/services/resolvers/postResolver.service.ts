import {Injectable} from '@angular/core';
import {GetDataService} from '../get-data.service';
import {Post} from '../../models/post';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<Observable<Post[]>> {

  constructor(private getDataService: GetDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Observable<Post[]>> | Promise<Observable<Post[]>> | Observable<Post[]> {
    return this.getDataService.getAllPosts();
  }
}
