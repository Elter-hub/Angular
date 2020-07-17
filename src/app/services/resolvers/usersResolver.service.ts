import {Observable} from 'rxjs';
import {GetDataService} from '../get-data.service';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {User} from '../../models/User';

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
