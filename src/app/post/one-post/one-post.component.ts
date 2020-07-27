import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../model/post';
import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':self', style({opacity: 0}), {optional: true}),
        query(':self', stagger('300ms', [
          animate('0.8s ease-in', keyframes([
            style({opacity: 0, transform: 'translateX(-25%)', offset: 0}),
            style({opacity: 0.5, transform: 'translateX(10%)', offset: 0.5}),
            style({opacity: 1, transform: 'translateX(0px)', offset: 1})
          ]))
        ]))
      ])
    ])
  ]
})
export class OnePostComponent implements OnInit {
  @Input() onePost: Post;
  constructor() { }

  ngOnInit(): void {
  }

}
