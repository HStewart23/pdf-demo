class ViewSDKClient {
  constructor() {
    const isBrowser = typeof window !== 'undefined';
    if (!isBrowser) {
      return null;
    } else {
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
      this.pdfEvent = [];
    }
  }

  ready() {
    const isBrowser = typeof window !== 'undefined';
    if (!isBrowser) {
      return null;
    } else {
      return this.readyPromise;
    }
  }

  previewFile(divId, viewerConfig) {
    const isBrowser = typeof window !== 'undefined';
    if (!isBrowser) {
      return null;
    } else {
      const config = {
        clientId: 'b9eb10d4729b433cbb865c348412b92c',
      };
      if (divId) {
        config.divId = divId;
      }

      this.adobeDCView = new window.AdobeDC.View(config);

      const previewFilePromise = this.adobeDCView.previewFile(
        {
          content: {
            location: {
              url: 'https://emf.thirdlight.com/file/24/pN3kJWTpN_5hi8hpNordpNJo0VT/1.%20EMF_Africa_Built%20Env_Final-11Oct%20-%20En.pdf',
            },
          },
          metaData: {
            fileName: 'Test.pdf',
            id: 'b9eb10d4729b433cbb865c348412b92c',
          },
        },
        viewerConfig
      );

      return previewFilePromise;
    }
  }

  registerEventsHandler(addEventToDataLayer) {
    const isBrowser = typeof window !== 'undefined';
    if (!isBrowser) {
      return null;
    } else {
      this.adobeDCView.registerCallback(
        window.AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
        event => {
          addEventToDataLayer(event);
        },
        {
          enablePDFAnalytics: true,
        }
      );
      return this.pdfEvent;
    }
  }
}

export default ViewSDKClient;
