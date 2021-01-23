import Pusher from 'pusher-js';
import { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { getLandingPage } from '../lib/services/homepage.service';

export default function Home({ header }) {
  const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY, {
    cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
    forceTLS: true,
    authEndpoint: 'http://localhost:3000/api/pusher',
  });

  useEffect(() => {
    if (document !== 'undefined') {
      if (!document.cookie.match('(^|;) ?user_id=([^;]*)(;|$)')) {
        // Primitive auth! This 'user_id' cookie is read by your auth endpoint,
        // and used as the user_id in the subscription to the 'presence-quickstart'
        // channel. This is then displayed to all users in the user list.
        // In your production app, you should use a secure auth system.
        document.cookie = `user_id=${prompt('Your initials:')}`;
      }
    }
  }, []);

  const channel = pusher.subscribe('presence-quickstart');

  channel.bind('pusher:subscription_succeeded', () => channel.members.each((member) => console.log('Succeed: ', member.id)));
  channel.bind('pusher:member_added', (member) => console.log('Member added: ', member.id));
  channel.bind('pusher:member_removed', (member) => {
    console.log('member removed');
    console.log(member.id);
  });
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
