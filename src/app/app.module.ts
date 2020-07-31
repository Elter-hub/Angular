import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import { DisplayArrayPipe } from './display-array.pipe';
import {FetchDataService} from './services/fetch-data.service';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DisplayArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatListModule
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
