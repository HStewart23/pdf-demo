import React, { useEffect } from 'react';

const RefactoredViewNewSDKClient = () => {
  <>filler content</>;

  //     useEffect(()=>{

  //         checkWindow()

  //     },[])

  //     const checkWindow = async () => {

  //         window.readyPromise = new Promise(resolve => {

  //           if (window.AdobeDC) {

  //             resolve();

  //           } else {

  //             document.addEventListener('adobe_dc_view_sdk.ready', () => {

  //               resolve();

  //             });

  //           }

  //         });

  //         window.adobeDCView = undefined;

  //     }

  //     ready(){

  //       return this.readyPromise;

  //     }

  //     previewFile(divId, viewerConfig) {

  //       const config = {

  //         clientId: '60d3e9d87afb4d18ac7701b7e1a0ce1f',

  //       };

  //       if (divId) {

  //         config.divId = divId;

  //       }

  //       this.adobeDCView = new window.AdobeDC.View(config);

  //       const previewFilePromise = this.adobeDCView.previewFile(

  //         {

  //           content: {

  //             location: {

  //               url: 'https://emf.thirdlight.com/file/24/FM9nvqPFM.IixvIFMcZeFM2mNhd/The20Nature20Imperative3A20How20the20circular20economy20tackles20biodiversity20loss.pdf',

  //               /*

  //                     If the file URL requires some additional headers, then it can be passed as follows:-

  //                     headers: [

  //                         {

  //                             key: "<HEADER_KEY>",

  //                             value: "<HEADER_VALUE>",

  //                         }

  //                     ]

  //                     */

  //             },

  //           },

  //           metaData: {

  //             fileName: 'The Nature Imperative.pdf',

  //             id: 'b9eb10d4729b433cbb865c348412b92c',

  //           },

  //         },

  //         viewerConfig

  //       );

  //       return previewFilePromise;

  //     }

  //     registerEventsHandler() {

  //       const

  //       this.adobeDCView.registerCallback(

  //         window.AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,

  //         event => {

  //           // prettier-ignore

  //           window.dataLayer.push({ 'event': event.type });

  //           console.log('Event Type ' + event.type);

  //           // console.log(event.data);

  //         },

  //         {

  //           enablePDFAnalytics: true,

  //         }

  //       );

  //     }
};

export default RefactoredViewNewSDKClient;
