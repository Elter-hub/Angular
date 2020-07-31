import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {UsersResolverService} from './services/users-resolver.service';


const routes: Routes = [{
  path: '', component: UsersComponent, resolve: {users: UsersResolverService}
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
