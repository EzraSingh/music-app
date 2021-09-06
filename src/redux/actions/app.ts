import { ActionType, NoteName } from "../../interfaces";
import { ReduxActions, type } from "./constants";

export function setRootNote(note: NoteName): ActionType{
    return {
        type: type(ReduxActions.SET_ROOT_NOTE),
        payload: {
            note
        }
    }
}