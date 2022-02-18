import React, { useEffect } from 'react';
import ViewSDKClient from './ViewSDKClient';

const SizedContainer = ({ setPdfEvent }) => {
  useEffect(() => {
    const viewSDKClient = new ViewSDKClient();

    viewSDKClient.ready().then(() => {
      viewSDKClient.previewFile('pdf-div', {
        embedMode: 'SIZED_CONTAINER',
      });
      viewSDKClient.registerEventsHandler();
      console.log(viewSDKClient.registerEventsHandler());
      setPdfEvent(viewSDKClient.registerEventsHandler());
      // prettier-ignore
    });
  }, [setPdfEvent]);

  return <div id="pdf-div" className="sized-container-div" />;
};

export default SizedContainer;
