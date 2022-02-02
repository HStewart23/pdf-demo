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
        clientId: '60d3e9d87afb4d18ac7701b7e1a0ce1f',
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
              url: 'https://emf.thirdlight.com/file/24/FM9nvqPFM.IixvIFMcZeFM2mNhd/The20Nature20Imperative3A20How20the20circular20economy20tackles20biodiversity20loss.pdf',
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
            fileName: 'The Nature Imperative.pdf',
            id: 'b9eb10d4729b433cbb865c348412b92c',
          },
        },
        viewerConfig
      );

      return previewFilePromise;
    }

    registerEventsHandler() {
      this.adobeDCView.registerCallback(
        window.AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
        /* call back function */
        event => {
          console.log('Event Type ' + event.type);
          console.log(event.data);
        },
        /* options to control the callback execution */
        {
          enablePDFAnalytics: true,
        }
        // window.AdobeDC.View.Enum.PDFAnalyticsEvents.PAGE_VIEW,
        // window.AdobeDC.View.Enum.PDFAnalyticsEvents.DOCUMENT_DOWNLOAD
      );
    }

    // get eventsHandler() {
    //   return this.registerEventsHandler();
    // }
  }

  return isBrowser ? new ViewSDKClient() : null;
};

export default ViewNewSDKClient;
