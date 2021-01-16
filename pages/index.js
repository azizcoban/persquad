import Pusher from 'pusher-js';
import PageHeader from '../components/PageHeader';
import { getLandingPage } from '../lib/services/homepage.service';

const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY, {
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
  encrypted: true,
});

console.log(pusher);

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
