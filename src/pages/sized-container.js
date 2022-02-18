import React from 'react';
import ViewSDKClient from './ViewSDKClient';

const SizedContainer = () => {
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
