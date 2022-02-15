import * as React from 'react';
import { Helmet } from 'react-helmet';
import SizedContainer from './sized-container';

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
  const gtmDataLayerVars = {
    pageId: 'pdf-demo',
    event: 'Page View',
    pageType: 'pdf demo page',
  };
  return (
    <>
      <Helmet>
        <script id="initiate-datalayer-script">
          {`
          window.dataLayer = window.dataLayer || []; 
        `}
        </script>
        <script id="google-tag-manager-script">
          {`(function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'G-DH2LRX8YLP');`}
        </script>
        <script
          type="text/javascript"
          src="https://documentcloud.adobe.com/view-sdk/main.js"
        />
      </Helmet>
      <main style={pageStyles}>
        <title>📄 PDF Demo Page 📄</title>
        <h1 style={headingStyles}>PDF PROTOTYPE V.1</h1>
        <p style={paragraphStyles}>
          We use a lot of pdfs so this initial prototype is just to see exactly
          how useful it is to use the ADOBE PDF VIEWER as an alternate way to
          view our PDFs. So with no further ado please find below a pdf …
        </p>
        <div style={pdfStyles}>
          <SizedContainer />
        </div>
      </main>
    </>
  );
};

export default IndexPage;
