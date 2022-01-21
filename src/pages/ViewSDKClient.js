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

    // previewFileUsingFilePromise(divId, filePromise, fileName) {
    //   /* Initialize the AdobeDC View object */
    //   this.adobeDCView = new window.AdobeDC.View({
    //     /* Pass your registered client id */
    //     clientId: '8c0cd670273d451cbc9b351b11d22318',
    //     /* Pass the div id in which PDF should be rendered */
    //     divId,
    //   });

    //   /* Invoke the file preview API on Adobe DC View object */
    //   this.adobeDCView.previewFile(
    //     {
    //       /* Pass information on how to access the file */
    //       content: {
    //         /* pass file promise which resolve to arrayBuffer */
    //         promise: filePromise,
    //       },
    //       /* Pass meta data of file */
    //       metaData: {
    //         /* file name */
    //         fileName: fileName,
    //       },
    //     },
    //     {}
    //   );
    // }

    // registerSaveApiHandler() {
    //   /* Define Save API Handler */
    //   const saveApiHandler = (metaData, content, options) => {
    //     console.log(metaData, content, options);
    //     return new Promise(resolve => {
    //       /* Dummy implementation of Save API, replace with your business logic */
    //       setTimeout(() => {
    //         const response = {
    //           code: window.AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
    //           data: {
    //             metaData: Object.assign(metaData, {
    //               updatedAt: new Date().getTime(),
    //             }),
    //           },
    //         };
    //         resolve(response);
    //       }, 2000);
    //     });
    //   };

    //   this.adobeDCView.registerCallback(
    //     window.AdobeDC.View.Enum.CallbackType.SAVE_API,
    //     saveApiHandler,
    //     {}
    //   );
    // }

    registerEventsHandler() {
      console.log('inside registerEventsHandler() - 1');
      /* Register the callback to receive the events */
      this.adobeDCView.registerCallback(
        console.log('adobeDCView.registerCallback() - 2'),
        /* Type of call back */
        window.AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
        /* call back function */
        event => {
          console.log('adobe event returned - 3');
          console.log('Event Type ' + event.type);
          console.log('Event Data ' + event.data);
        },
        /* options to control the callback execution */
        {
          enablePDFAnalytics: true,
        },
        window.AdobeDC.View.Enum.PDFAnalyticsEvents.PAGE_VIEW,
        window.AdobeDC.View.Enum.PDFAnalyticsEvents.DOCUMENT_DOWNLOAD
      );
    }
  }

  return isBrowser ? new ViewSDKClient() : null;
};

export default ViewNewSDKClient;
