export enum CoreActions {

}

/** ? Extract type as string from Typescript enum */
export const type = (t: CoreActions) => CoreActions[t];
