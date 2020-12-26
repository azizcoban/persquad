/* eslint-diasble */
import '../styles/app.scss';
import Layout from '../components/Layout';
import { getMenuItems } from '../lib/services/homepage.service';

function App({ Component, pageProps }) {
  return (
    <Layout content={pageProps?.menuItems}>
      <Component {...pageProps} />
    </Layout>
  );
}

App.getInitialProps = async () => {
  const { menuItems } = await getMenuItems();

  return {
    pageProps: {
      menuItems,
    },
  };
};

export default App;
