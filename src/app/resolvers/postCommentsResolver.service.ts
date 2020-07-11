import {Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {GetDataService} from '../services/getData.service';
import { Commentt } from '../models/commentt';
import {UserIdService} from '../services/userId.service';

@Injectable({
  providedIn: 'root'
})
export class PostCommentsResolverService implements Resolve<Commentt[]>{
  userId: number;

  constructor( private userIdentificator: UserIdService,
              private getDataService: GetDataService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Commentt[]> | Promise<Commentt[]> | Commentt[] {
    this.userIdentificator.currentId.subscribe(uId => this.userId = uId);
    return this.getDataService.getPostComments(this.userId);
  }
}
