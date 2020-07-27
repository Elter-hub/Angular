import { Component } from '@angular/core';
import {ExchangeDataService} from '../services/exchange-data.service';

@Component({
  selector: 'app-filter-users-form',
  templateUrl: './filter-users-form.component.html',
  styleUrls: ['./filter-users-form.component.css']
})
export class FilterUsersFormComponent  {
  options = ['by Id', 'by email', 'whole object'];
  constructor(private exchangeDataService: ExchangeDataService) {}

  find(text: string): void {
    this.exchangeDataService.filterUsers(text);
  }
}
