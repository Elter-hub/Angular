import {Component, Input} from '@angular/core';
import {Comment} from '../model/comment';
import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-one-comment',
  templateUrl: './one-comment.component.html',
  styleUrls: ['./one-comment.component.css'],
  animations: [
    trigger('commentAnimation', [
      transition('* => *', [
        query(':self', stagger('500ms', [
          animate('0.5s ease-in', keyframes([
            style({opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0}),
            style({opacity: 1, transform: 'scale3d(0.9, 0.9, 0.9)', offset: 1})
          ]))
        ]))
      ])
    ])
  ]
})
export class OneCommentComponent {
  @Input() oneComment: Comment;

  color1: number = Math.round(Math.random() * 255);
  color2: number = Math.round(Math.random() * 255);
  color3: number = Math.round(Math.random() * 255);
  colorize = 'rgba(' + this.color1 + ', ' + this.color2 + ', ' + this.color3 + ', ' + 0.5 + ')';


}
