import {Component, Input } from '@angular/core';
import {User} from '../model/user';
import {ExchangeDataService} from '../services/exchange-data.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {UserFormComponent} from '../user-form/user-form.component';
import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        query(':self', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({transform: 'scale3d(1, 1, 1) translate3d(0, 0, 150px)\n' +
                '      rotate3d(0, 1, 0, -190deg)', offset: 0}),
            style({transform:  'scale3d(1, 1, 1) translate3d(0, 0, 150px)\n' +
                '      rotate3d(0, 1, 0, -170deg)', offset: 0.5}),
            style({transform: ' scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n' +
                '      rotate3d(0, 1, 0, 0deg)', offset: 1})
          ]))
        ]))
      ])
    ])
  ]

})
export class SingleUserComponent  {
  @Input() singleUser: User;
  constructor(private exchangeDataService: ExchangeDataService,
              public dialog: MatDialog) {
  }
  removeUser(id: number): void {
    this.exchangeDataService.removeUser(id);
  }
  // Pop up window ⏬⏬⏬⏬⏬⏬⏬⏬⏬

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '600px';

    dialogConfig.data = {
      user: this.singleUser,
    };

    const dialogRef = this.dialog.open(UserFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => Object.keys(data).forEach(key => {
        console.log(key, '🔑');
        this.singleUser[key] = data[key];
      }));
  }
}
