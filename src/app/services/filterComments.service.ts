import {Injectable} from '@angular/core';
import {BehaviorSubject, } from 'rxjs';
import {GetDataService} from './get-data.service';
import {Comments} from '../models/comments';

@Injectable({
  providedIn: 'root'
})
export class FilterCommentsService {
  arrayToFilter: Comments[];
  filteredArray: Comments[];

  private allComments = new BehaviorSubject<Comments[]>([]);
  currentComments = this.allComments.asObservable();

  constructor(private  getDataService: GetDataService) {
    this.getDataService.getAllComments().subscribe(value => this.arrayToFilter = value);
  }

  changeArray(array: Comments[]): void{
    this.allComments.next(array);
  }

  filterById(postId: number): Comments[] {
    this.currentComments.subscribe(commentsArray => {
      this.filteredArray = commentsArray.filter(comment => comment.postId === postId);
    });
    if (postId === 0){
      this.filteredArray = this.arrayToFilter;
    }
    this.changeArray(this.filteredArray);
    return this.filteredArray;
  }
}
