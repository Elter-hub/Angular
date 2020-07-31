import { Component } from '@angular/core';
import {MatButtonToggle} from '@angular/material/button-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChangeThemeAndPipe';
  backColor: any;
  color: any;

  switchColor(event: MatButtonToggle) {
    switch (event.id) {
      case 'mat-button-toggle-1':
        this.backColor = 'red';
        this.color = 'white';
        break;

      case 'mat-button-toggle-2':
        this.backColor = 'green';
        this.color = 'blue';
        break;

      case 'mat-button-toggle-3':
        this.backColor = 'blue';
        this.color = 'red';
        break;
    }
  }
}
