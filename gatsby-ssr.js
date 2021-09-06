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
export const onRenderBody = (
  { setHeadComponents, setPreBodyComponents },
  pluginOptions
) => {
  setHeadComponents([
    <link
      rel="dns-prefetch"
      href="//kit.fontawesome.com"
      key="dns-fontawesome"
    />,
    <link rel="dns-prefetch" href="//cdn.jsdelivr.net" key="dns-jsdelivr" />,
    <script
      src="https://kit.fontawesome.com/5ff6aed892.js"
      crossOrigin="anonymous"
      key="fontawesome"
    />,
    <script
      src="https://code.jquery.com/jquery-3.6.0.min.js"
      integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
      crossOrigin="anonymous"
      key="jquery"
    />,
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/animate.css@4.1.0/animate.css"
      integrity="sha256-6Wozb/CzRANFOaGqN+u/uRT7kcffVIQt9OhOuuA6I9o="
      crossOrigin="anonymous"
      key="animate-css"
    />,
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/react-toastify@6.0.8/dist/ReactToastify.css"
      integrity="sha256-RxKz0HTc9uwO5Fdh8T73LX0ho6XnKGHJQ+HfqoB50Io="
      crossOrigin="anonymous"
      key="react-toastify-css"
    />,
    /* Inject @artsy/fresnel styles in to the head */
    <style key="ux-media-styles">{UX.mediaStyle}</style>,
  ]);
};
