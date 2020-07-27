import {Component, Input } from '@angular/core';
import {User} from '../model/user';
import {ExchangeDataService} from '../services/exchange-data.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {UserFormComponent} from '../user-form/user-form.component';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css'],

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
