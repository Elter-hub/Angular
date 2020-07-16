import {Injectable} from '@angular/core';
import {BehaviorSubject, } from 'rxjs';
import {User} from '../models/user';
import {GetDataService} from './get-data.service';

@Injectable({
  providedIn: 'root'
})
export class ManipulatingUsersArrayService {
  arrayToFilter: User[];
  filtrated: User[];
  newArray: User[];

  private allUsers = new BehaviorSubject<User[]>([]);
  currentUsers = this.allUsers.asObservable();

  constructor(private  getDataService: GetDataService) {
   this.getDataService.getAllUsers().subscribe(value => this.arrayToFilter = value)
  }

  changeArray(array: User[]){
    this.allUsers.next(array);
  }

  changeOneUser(user: User){
    this.currentUsers.subscribe(usersArray => {
     usersArray[user.id-1] = user;
     this.newArray = usersArray;
    })
    this.allUsers.next(this.newArray)
  }

  filterByEmail(email: string) {
    this.currentUsers.subscribe(userArray => {
      this.filtrated = userArray.filter(user => user.email.includes(email) || user.website.includes(email));
      if (email === ''){
        this.filtrated = this.arrayToFilter;
      }
    })
    this.changeArray(this.filtrated)
  }
}
