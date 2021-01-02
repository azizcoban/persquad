import PageHeader from '../components/PageHeader';
import { getLandingPage } from '../lib/services/homepage.service';

export default function Home({ header }) {
  return (
    <div>
      <PageHeader content={header} />
    </div>
  );
}

export async function getStaticProps() {
  const { header } = await getLandingPage();

  return {
    props: {
      header: header || null,
    },
  };
}
