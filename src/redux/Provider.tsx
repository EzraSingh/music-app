import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { ActionHandler } from '../interfaces';
import { storeFactory, appMiddlewares } from './store';

export interface ReduxProviderProps {
  appReducers?: { [reducer: string]: ActionHandler };
  appMiddlewares?: any[];
}

export const ReduxProvider: FunctionComponent<ReduxProviderProps> = ({
  appReducers,
  children,
}) => {
  const appStore = storeFactory(appReducers, appMiddlewares);

  return <Provider store={appStore}>{children}</Provider>;
};
