import React from 'react';
import { UX } from '@liontechnyc/gemini';
import { ReduxProvider } from './src/redux';
import { NotificationsProvider } from './src/notifications';

import './src/styles/app.scss';

export const wrapRootElement = ({ element, props }) => {
  return <ReduxProvider>{element}</ReduxProvider>;
};

export const wrapPageElement = ({ element, props }) => {
  return (
    <UX.Provider>
      <NotificationsProvider />
      {element}
    </UX.Provider>
  );
};
