import { Pipe, PipeTransform } from '@angular/core';
import {User} from './model/user';

@Pipe({
  name: 'displayArray'
})
export class DisplayArrayPipe implements PipeTransform {
  newString = '';


  // Як то треба правильно робити???
  // Завдання було щоб за допомогою параметра пайпи показувати різні ступені вкладеності обєкта

  transform(users: User[], HowDeep?: number) {
    users.map(user => {
      for (const value of Object.entries(user).flat()){
        if (typeof  value === 'object' && HowDeep > 1) {
          for (const text of Object.entries(value).flat()){
            if (typeof text === 'object' && HowDeep > 2){
              for (const words of Object.entries(text)) {
                this.newString += '🥉 ' + words + '🥉';
              }
            }
            this.newString += ' ' + text + '🥈 ';
          }
        }else {
          this.newString += ' ' + value + '🥇 ';
        }
      }
    });
    return this.newString;
  }


}
