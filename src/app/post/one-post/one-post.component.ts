import {Component, Input} from '@angular/core';
import {Post} from '../model/post';
import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':self', stagger('300ms', [
          animate('0.8s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-25%)', offset: 0}),
            style({opacity: 0.5, transform: 'translateY(10%)', offset: 0.5}),
            style({opacity: 1, transform: 'translateY(0px)', offset: 1})
          ]))
        ]))
      ])
    ])
  ]
})
export class OnePostComponent {
  @Input() onePost: Post;
  color1: number = Math.round(Math.random() * 255);
  color2: number = Math.round(Math.random() * 255);
  color3: number = Math.round(Math.random() * 255);
  colorize = 'rgba(' + this.color1 + ', ' + this.color2 + ', ' + this.color3 + ', ' + 0.7 + ')';

}
