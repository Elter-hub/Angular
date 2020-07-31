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
      for (const userKeyValue of Object.entries(user).flat()){
        if (typeof  userKeyValue === 'object' && HowDeep > 1) {
          for (const addressAndCompanyKV of Object.entries(userKeyValue).flat()){
            if (typeof addressAndCompanyKV === 'object' && HowDeep > 2){
              for (const geo of Object.entries(addressAndCompanyKV)) {
                this.newString += '🥉 ' + geo + '🥉';
              }
            }
            this.newString += ' ' + addressAndCompanyKV + '🥈 ';
          }
        }else {
          this.newString += ' ' + userKeyValue + '🥇 ';
        }
      }
    });
    return this.newString;
  }
}
