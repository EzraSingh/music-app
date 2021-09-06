import Immutable from 'immutable';
import { Note, Interval } from '@tonaljs/tonal';
import _fromPairs from 'lodash/fp/fromPairs';
import handlers from './handlers';
import { generateId } from '../utils';
import { 
  ActionType, 
  AppState, 
  ReduxReducer, 
  ToneLayer 
} from '../interfaces';

const defaultLayers = Immutable.fromJS({
    [generateId()] : {
      type: 'tone',
      rootNote: 'C',
      isVisible: true,
      chromatics: _fromPairs(
        Interval.names().map(
          (interval) => [
            Note.transposeFrom("C")(interval), 
            interval === '1P'
          ]
        )
      )
    } as ToneLayer
})

const defaultState: AppState = {
  rootNote: 'C',
  layers: Immutable.Map(defaultLayers),
}

export function reducerFactory(initialState: any = defaultState, handlers: ReduxReducer) {
  return function (state = initialState, action: ActionType) {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state;
  };
}

export default reducerFactory({}, handlers);
