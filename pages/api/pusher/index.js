import nc from 'next-connect';
import Pusher from 'pusher';

const pusher = new Pusher({
  appId: process.env.NEXT_PUBLIC_PUSHER_APP_ID,
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
  secret: process.env.PUSHER_SECRET_KEY,
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
  useTLS: true,
});

const memberHandler = nc()
  .post((req, res) => {
    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;

    // Primitive auth: the client self-identifies. In your production app,
    // the client should provide a proof of identity, like a session cookie.
    // eslint-disable-next-line
    const { user_id } = req.cookies;

    const presenceData = { user_id };
    const auth = pusher.authenticate(socketId, channel, presenceData);
    res.send(auth);
  });

export default memberHandler;
