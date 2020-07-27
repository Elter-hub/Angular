import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from '../users/users.component';
import {UserFormComponent} from '../user-form/user-form.component';
import {UsersResolverService} from '../services/resolvers/users-resolver.service';


const routes: Routes = [
  {
    path: '', component: UsersComponent, resolve: {users: UsersResolverService}, children: [
      {path: 'form', component: UserFormComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UserRoutingModule { }
