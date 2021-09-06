import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { notificationsMiddleware } from '../notifications';
import coreReducer from './reducer';

export const appMiddlewares = [notificationsMiddleware];

export const storeFactory = (appReducers = {}, appMiddlewares: any[] = []) =>
  configureStore({
    reducer: combineReducers({ app: coreReducer, ...appReducers }),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        logger,
        ...appMiddlewares,
      ]),
    devTools: process.env.NODE_ENV !== 'production',
  });
