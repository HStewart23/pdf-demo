import React, { useEffect } from 'react';
import ViewSDKClient from './ViewSDKClient';

const SizedContainer = () => {
  useEffect(() => {
    const viewSDKClient = new ViewSDKClient();

    viewSDKClient.ready().then(() => {
      // console.log('process.env.adobe id->' + process.env.ADOBE_ID);
      viewSDKClient.previewFile('pdf-div', {
        embedMode: 'SIZED_CONTAINER',
      });
      viewSDKClient.registerEventsHandler();
    });
  }, []);

  return <div id="pdf-div" className="sized-container-div" />;
};

export default SizedContainer;
