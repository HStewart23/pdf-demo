import React, { Component } from 'react';
import ViewNewSDKClient from './ViewSDKClient';
class SizedContainer extends Component {
  componentDidMount() {
    const viewSDKClient = ViewNewSDKClient();
    viewSDKClient.ready().then(() => {
      viewSDKClient.previewFile('pdf-div', {
        embedMode: 'SIZED_CONTAINER',
      });
      viewSDKClient.registerEventsHandler();
    });
  }

  render() {
    return <div id="pdf-div" className="sized-container-div" />;
  }
}

export default SizedContainer;
