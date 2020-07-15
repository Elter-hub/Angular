import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {GetDataService} from '../get-data.service';
import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve<User[]>{
  users: User[];


  allUsers: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(this.users);
  currentAllUsers = this.allUsers.asObservable();

  constructor(private getDataService: GetDataService){
    this.getDataService.getAllUsers().subscribe(value => this.users = value)
  }

  removesUser(userId: number) {
    this.users.splice(userId, 1)
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> | Promise<User[]> | User[] {
    return this.users;
  }
}
