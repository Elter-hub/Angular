import {Injectable} from '@angular/core';
import {User} from '../models/User';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {GetDataService} from '../users/services/getData.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve<User[]>{
  constructor(private getDataService: GetDataService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> | Promise<User[]> | User[] {
    return this.getDataService.getAllUsers();
  }
}
