import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../model/user';
import {filter, map, takeWhile} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExchangeDataService {
  editedUsers: User[];
  filteredUsers: User[];

  private allUsers = new BehaviorSubject<User[]>([]);
  currentUsers = this.allUsers.asObservable();

  changeArray(array: User[]): void{
    this.allUsers.next(array);
  }

  removeUser(userId: number): void{
    this.editedUsers = this.allUsers.getValue().filter(oneUser => oneUser.id !== userId);
    this.allUsers.next(this.editedUsers);
  }

  filterUsers(searchText: string): void {
    this.filteredUsers = this.allUsers.getValue().filter(user => {
      return user.name.includes(searchText);
    });
    this.allUsers.next(this.filteredUsers);
  }
}
