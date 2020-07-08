import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable()
export class DataService {

  private userId = new BehaviorSubject<number>(1);
  currentId = this.userId.asObservable();

  constructor() {
  }

  changeUserId(userId: number) {
    this.userId.next(userId)
  }
}
