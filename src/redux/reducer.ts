import { ActionType, AppReducer,  } from './interfaces';
import handlers from './handlers';

export function reducerFactory(initialState: any, handlers: AppReducer) {
  return function (state = initialState, action: ActionType) {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state;
  };
}

export default reducerFactory({}, handlers);
