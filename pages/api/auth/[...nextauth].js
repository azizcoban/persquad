import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
// import { connectToDB } from '../../../db/connect';
// import { getUserByEmail } from '../../../db/user';

const options = {

  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whsatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: 'Email', type: 'text', placeholder: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const user = { username: 'Aziz' };
        console.log(credentials);

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return Promise.resolve(user);
        }
        // If you return null or false then the credentials will be rejected
        return Promise.reject(new Error('User not found'));
        // You can also Reject this callback with an Error or with a URL:
        // return Promise.reject(new Error('error message')) // Redirect to error page
        // return Promise.reject('/path/to/redirect')        // Redirect to a URL
      },
    }),
  ],
  database: process.env.NEXT_PUBLIC_DATABASE_URI,

  site: process.env.NEXTAUTH_URL,

  session: {
    jwt: true,
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  // callbacks: {
  //   signIn: async (user, account, profile) => {
  //     Promise.resolve(true);
  //   },
  //   redirect: async (url, baseUrl) => Promise.resolve(baseUrl),
  //   session: async (session, user) => Promise.resolve(session),
  //   jwt: async (token, user, account, profile, isNewUser) => Promise.resolve(token),
  // },

};

export default (req, res) => NextAuth(req, res, options);
