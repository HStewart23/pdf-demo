import * as React from 'react';
import { Helmet } from 'react-helmet';
import SizedContainer from './sized-container';
// import TagManager from 'react-gtm-module';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const paragraphStyles = {
  marginBottom: 48,
};

const pdfStyles = {
  height: 500,
  width: 700,
};

const IndexPage = () => {
  //   const tagManagerArgs = {
  //     gtmId: 'GTM-N54G3K6',
  //   };
  //   TagManager.initialize(tagManagerArgs);
  return (
    <main style={pageStyles}>
      <Helmet>
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DH2LRX8YLP"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {window.dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-DH2LRX8YLP');
        </script> */}
        <script
          type="text/javascript"
          src="https://documentcloud.adobe.com/view-sdk/main.js"
        />
      </Helmet>
      <title>📄 PDF Demo Page 📄</title>
      <h1 style={headingStyles}>PDF PROTOTYPE V.1</h1>
      <p style={paragraphStyles}>
        We use a lot of pdfs so this initial prototype is just to see exactly
        how useful it is to use the ADOBE PDF VIEWER as an alternate way to view
        our PDFs. So with no further ado please find below a pdf …
      </p>
      <div style={pdfStyles}>
        <SizedContainer />
      </div>
    </main>
  );
};

export default IndexPage;
