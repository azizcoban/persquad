/* eslint-diasble */
import '../styles/app.scss';
import Head from 'next/head';
import Layout from '../components/Layout';
import { getMenuItems } from '../lib/services/homepage.service';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Persquad</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1" />
        <meta property="og:title" content="Persquad" key="title" />
      </Head>
      <Layout content={pageProps?.menuItems}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

App.getInitialProps = async () => {
  const response = await getMenuItems();

  return {
    pageProps: {
      menuItems: response.menuItems,
    },
  };
};

export default App;
