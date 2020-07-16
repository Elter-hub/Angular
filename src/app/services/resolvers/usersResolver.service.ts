import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {GetDataService} from '../get-data.service';
import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve<User[]>{

  constructor(private getDataService: GetDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> | Promise<User[]> | User[] {
    return this.getDataService.getAllUsers();
  }
}
