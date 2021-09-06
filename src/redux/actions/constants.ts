export enum ReduxActions {
    SET_ROOT_NOTE
}

/** ? Extract type as string from Typescript enum */
export const type = (t: ReduxActions) => ReduxActions[t];
