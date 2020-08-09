import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { PlayerStore } from '../../store/players/player-store';
import { PlayerModel } from '../../models/player-model';
import { Delete } from '../../store/players/player-action';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  playerState: Observable<any>;

  constructor(private store: Store<PlayerStore>) {
    this.playerState = store.select('players');
  }

  ngOnInit() {
  }

  delete(player: PlayerModel) {
    this.store.dispatch(Delete(player));
  }

}