import {Injectable} from '@angular/core';
import {BehaviorSubject, } from 'rxjs';
import {GetDataService} from './get-data.service';
import {Post} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class FilterPostsService {
  arrayToFilter: Post[];
  filteredArray: Post[];

  private allPosts = new BehaviorSubject<Post[]>([]);
  currentPosts = this.allPosts.asObservable();

  constructor(private  getDataService: GetDataService) {
    this.getDataService.getAllPosts().subscribe(value => this.arrayToFilter = value);
  }

  changeArray(array: Post[]): void{
    this.allPosts.next(array);
  }

  filterById(postId: number): Post[] {
    this.currentPosts.subscribe(postsArray => {
     this.filteredArray = postsArray.filter(post => post.userId === postId);
    });
    if (postId === 0){
      this.filteredArray = this.arrayToFilter;
    }
    this.changeArray(this.filteredArray);
    return this.filteredArray;
  }
}
