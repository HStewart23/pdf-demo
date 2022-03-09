import React from 'react';
import ViewSDKClient from '../utils/ViewSDKClient';

const SizedContainer = () => {
  const isBrowser = typeof window !== 'undefined';
  if (!isBrowser) {
    return null;
  }
  const addEventToDataLayer = event => {
    window.dataLayer.push({ event: event });
  };

  const viewSDKClient = new ViewSDKClient();

  viewSDKClient.ready().then(() => {
    viewSDKClient.previewFile('pdf-div', {
      embedMode: 'SIZED_CONTAINER',
    });
    viewSDKClient.registerEventsHandler(addEventToDataLayer);
  });

  return <div id="pdf-div" className="sized-container-div" />;
};

export default SizedContainer;
