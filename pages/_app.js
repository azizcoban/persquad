/* eslint-diasble */
import '../styles/app.scss';
import Head from 'next/head';
import { Provider } from 'next-auth/client';
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
      <Provider session={pageProps.session}>
        <Layout content={pageProps?.menuItems}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

App.getInitialProps = async () => {
  const response = await getMenuItems();

  // const pusher = new Pusher({
  //   appId: process.env.NEXT_PUBLIC_PUSHER_APP_ID,
  //   key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
  //   secret: process.env.PUSHER_SECRET_KEY,
  //   cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
  // });

  // pusher.trigger('my-channel', 'my-event', {
  //   message: 'hello world',
  // });

  return {
    pageProps: {
      menuItems: response.menuItems,
    },
  };
};

export default App;
