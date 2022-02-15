import React, { useEffect } from 'react';
import ViewSDKClient from './ViewSDKClient';

const SizedContainer = () => {
  useEffect(() => {
    const viewSDKClient = new ViewSDKClient();

    viewSDKClient.ready().then(() => {
      viewSDKClient.previewFile('pdf-div', {
        embedMode: 'SIZED_CONTAINER',
      });
      viewSDKClient.registerEventsHandler();
    });
  }, []);

  return <div id="pdf-div" className="sized-container-div" />;
};

export default SizedContainer;
