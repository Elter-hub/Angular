import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class SingleUserResolverService implements Resolve<User> {
  user: User;

  constructor(private activatedRoute: ActivatedRoute) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    this.activatedRoute.data.subscribe(value => {
      this.user = history.state.user;
    });
    return this.user;
  }







}
