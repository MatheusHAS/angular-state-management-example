import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { CreatePlayerComponent } from '../components/create-player/create-player.component';
import { PlayerListComponent } from '../components/player-list/player-list.component';
import { StoreModule } from '@ngrx/store';
import Reducers from '../store/reducers';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(Reducers)
  ],
  declarations: [ AppComponent, HelloComponent, PlayerListComponent , CreatePlayerComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
