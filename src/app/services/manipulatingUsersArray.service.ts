import {Injectable} from '@angular/core';
import {BehaviorSubject, } from 'rxjs';
import {GetDataService} from './get-data.service';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ManipulatingUsersArrayService {
  arrayToFilter: User[];
  filtrated: User[];

  private allUsers = new BehaviorSubject<User[]>([]);
  currentUsers = this.allUsers.asObservable();

  constructor(private  getDataService: GetDataService) {
    this.getDataService.getAllUsers().subscribe(value => this.arrayToFilter = value);
  }

  changeArray(array: User[]): void{
    this.allUsers.next(array);
  }

  filterByEmail(email: string): User[] {
    this.currentUsers.subscribe(userArray => {
      this.filtrated = userArray.filter(user => user.email.includes(email) || user.website.includes(email));
      if (email === ''){
        this.filtrated = this.arrayToFilter;
        return this.filtrated;
      }
    });
    this.changeArray(this.filtrated);
    return this.filtrated;
  }
}
