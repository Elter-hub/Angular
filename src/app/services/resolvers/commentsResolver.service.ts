import {Injectable} from '@angular/core';
import {GetDataService} from '../get-data.service';
import { Comments } from '../../models/comments';

import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsResolverService implements Resolve<Comments[]> {
  constructor(private getDataService: GetDataService) {  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comments[]> | Promise<Comments[]> | Comments[] {
    return this.getDataService.getAllComments();
  }
}
