import React, { FunctionComponent } from 'react';
import { toast, ToastContainer, ToastContainerProps } from 'react-toastify';
import { ActionType } from './redux';

export interface NewMessageAlertProps {
  did: string;
  from: string;
  text: string;
}


export const NotificationsProvider: FunctionComponent<Partial<
  ToastContainerProps
>> = (props) => {
  return (
    <ToastContainer
      key="notifications-container"
      limit={5}
      position="top-right"
      {...props}
    />
  );
};

export const notificationsMiddleware = (store: any) => {
  return (next: any) => (action: ActionType) => {
    if (action.type === 'UI_ALERT') {
      const { alertType, msg } = action.payload;
      toast(msg, {
        type: alertType,
        toastId: Buffer.from(msg).toString('base64'),
      });
    }
    return next(action);
  };
};
