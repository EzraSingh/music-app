import { NoteName } from '@tonaljs/tonal';
import Immutable from 'immutable';
import { AppLayer } from './app';

export interface ActionType {
  type: string;
  payload?: any;
  streamEvent?: boolean;
}

export type ActionHandler = (state: ReduxState, action: ActionType) => any;

export type ReduxReducer = { [action: string]: ActionHandler };

export interface AppState{
  rootNote: NoteName;
  layers: Immutable.Map<string, AppLayer>;
}

export interface ReduxState {
  app: AppState;
}
