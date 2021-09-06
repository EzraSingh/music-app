import { ReduxReducer } from '../../interfaces';
import { ReduxActions, type } from '../actions';

const stub = () => {};

export default {
    [type(ReduxActions.SET_ROOT_NOTE)]: (state, action) => {
        const { note } = action.payload;
        return { ...state, rootNote: note }
    }
} as ReduxReducer;
