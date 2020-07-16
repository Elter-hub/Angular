import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {User} from '../models/user';
import {A} from '@angular/cdk/keycodes';
import {GetDataService} from './get-data.service';

@Injectable({
  providedIn: 'root'
})
export class ManipulatingUsersArrayService {
  arrayToFilter: User[];
  filtrated: User[];

  private allUsers = new BehaviorSubject<User[]>([]);
  currentUsers = this.allUsers.asObservable();

  constructor(private  getDataService: GetDataService) {

   this.getDataService.getAllUsers().subscribe(value => this.arrayToFilter = value)
  }

  changeArray(array: User[]){
    this.allUsers.next(array);
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
