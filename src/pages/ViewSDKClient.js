const isBrowser = typeof window !== 'undefined';

const ViewNewSDKClient = () => {
  class ViewSDKClient {
    constructor() {
      this.readyPromise = new Promise(resolve => {
        if (window.AdobeDC) {
          resolve();
        } else {
          document.addEventListener('adobe_dc_view_sdk.ready', () => {
            resolve();
          });
        }
      });
      this.adobeDCView = undefined;
    }

    ready() {
      return this.readyPromise;
    }

    previewFile(divId, viewerConfig) {
      const config = {
        clientId: '3c7f6c1d335d46c8a162d2a119183399',
      };
      if (divId) {
        /* Pass the div id in which PDF should be rendered */
        config.divId = divId;
      }

      this.adobeDCView = new window.AdobeDC.View(config);

      const previewFilePromise = this.adobeDCView.previewFile(
        {
          content: {
            location: {
              url: 'https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf',
              /*
                    If the file URL requires some additional headers, then it can be passed as follows:-
                    headers: [
                        {
                            key: "<HEADER_KEY>",
                            value: "<HEADER_VALUE>",
                        }
                    ]
                    */
            },
          },
          /* Pass meta data of file */
          metaData: {
            fileName: 'Bodea Brochure.pdf',
            id: '6d07d124-ac85-43b3-a867-36930f502ac6',
          },
        },
        viewerConfig
      );

      return previewFilePromise;
    }

    registerEventsHandler() {
      /* Register the callback to receive the events */
      this.adobeDCView.registerCallback(
        /* Type of call back */
        window.AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
        /* call back function */
        event => {
          console.log('Type ' + event.type);
          console.log('Data ' + event.data);
        },
        /* options to control the callback execution */
        {
          /* Enable PDF analytics events on user interaction. */
          listenOn: [
            AdobeDC.View.Enum.PDFAnalyticsEvents.PAGE_VIEW,
            AdobeDC.View.Enum.PDFAnalyticsEvents.DOCUMENT_DOWNLOAD,
          ],
          enablePDFAnalytics: true,
        }
      );
    }
  }

  return isBrowser ? new ViewSDKClient() : null;
};

export default ViewNewSDKClient;
