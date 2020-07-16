import {

  AfterViewChecked,

  Component, DoCheck, OnChanges, SimpleChanges,

} from '@angular/core';
import {User} from '../../models/user';
import {GetDataService} from '../../services/get-data.service';
import {ActivatedRoute} from '@angular/router';
import {ManipulatingUsersArrayService} from '../../services/manipulatingUsersArray.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  user: User;
  userId: number;

  constructor(private activatedRoute: ActivatedRoute,
              private manipulatingUsersArrayService: ManipulatingUsersArrayService) {
    console.log('🎛🎛🎛🎛🎛🎛🎛');

    this.activatedRoute.data.subscribe(value => {
      this.user = history.state.user;
      console.log( history.state.user);
    });
    this.manipulatingUsersArrayService.changeOneUser(this.user);
  }

  editUser(value: any) {
    console.log(value.phone +'📱📱📱📱📱📱📱📱📱📱📱');
    this.user.phone = value.phone;
    console.log(value.website +'🔊🔊🔊🔊🔊🔊');
    this.user.website = value.website;
  }
}
