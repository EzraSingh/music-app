
export interface ActionType {
  type: string;
  payload?: any;
  streamEvent?: boolean;
}

export type ActionHandler = (
  state: any,
  action: ActionType
) => any;

export type AppReducer = { [action: string]: ActionHandler };
