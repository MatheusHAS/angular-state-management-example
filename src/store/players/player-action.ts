import { Action } from "@ngrx/store";

export enum ActionTypes {
  Create = 'ADD',
  Update = 'UPD',
  Delete = 'DEL',
  Clear = 'CLR'
}

export const Create = (player: any) => {
  return <Action>{
    type: ActionTypes.Create,
    payload: player
  }
}

export const Delete = (player: any) => {
  return <Action>{
    type: ActionTypes.Delete,
    payload: player
  }
}