import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PlayerStore } from '../../store/players/player-store';
import { PlayerModel } from '../../models/player-model';
import { Create } from '../../store/players/player-action';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {
  public playerForm = new FormGroup({
    id: new FormControl('', [
      Validators.required
    ]),
    name: new FormControl('', [
      Validators.required
    ]),
  });

  private playerState: Observable<any>;

  constructor(private store: Store<PlayerStore>) {
    this.playerState = store.select('players');
  }

  ngOnInit() {
  }

  create() {
    const idInputElement = this.playerForm.get('id');
    const nameInputElement = this.playerForm.get('name');
    
    if (idInputElement.valid && nameInputElement.valid) {
      const player = new PlayerModel();
      player.id = parseInt(idInputElement.value, 10);
      player.name = nameInputElement.value;

      this.store.dispatch(Create(player));
      this.playerForm.patchValue({
        id: '',
        name: ''
      })
    }
  }

}