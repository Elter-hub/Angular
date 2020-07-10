import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserCheckService implements CanActivate{

  constructor() {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (+route.params.id > 10 || +route.params.id < 0 ) {
      alert('Only 10 users available');
      return false;
    }
    return true;
  }
}
