import React from 'react';
import '@/styles/globals.scss';
import Layout from '@/components/layout/Layout';
import PageMetadata from '@/components/layout/PageMetadata';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageMetadata />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;