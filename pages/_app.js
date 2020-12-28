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
  const response = await getMenuItems();

  return {
    pageProps: {
      menuItems: response.menuItems,
    },
  };
};

export default App;
