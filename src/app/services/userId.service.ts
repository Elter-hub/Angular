
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable()
export class UserIdService {

  private userId = new BehaviorSubject<number>(5);
  currentId = this.userId.asObservable();

  constructor() {
  }

  changeUserId(userId: number) {
    this.userId.next(userId)
  }
}
