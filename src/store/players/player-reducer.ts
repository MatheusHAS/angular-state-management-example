import { PlayerStore } from './player-store';
import { ActionModel } from '../action-model';
import { ActionTypes } from './player-action';
import { cloneDeep } from 'lodash';

const defaultStore = new PlayerStore();

const playerReducer = (
    state: PlayerStore = defaultStore,
    action: ActionModel
  ) => {
    switch(action.type) {
      case ActionTypes.Create: {
        const newState = cloneDeep(state);
        newState.players = [...state.players, action.payload];
        return newState;
      }
      case ActionTypes.Delete: {
        const newState = cloneDeep(state);
        newState.players = [...state.players].filter(player => player != action.payload);
        return newState;
      }
      default:
        return state;
    }
}

export default playerReducer;