import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { loginCMSUser } from '../../../lib/services/auth.service';

const options = {

  providers: [
    Providers.Credentials({
      authorize: async (credentials) => {
        const user = await loginCMSUser({
          identifier: credentials.username,
          password: credentials.password,
        });

        // eslint-disable-next-line
        const isTrueSet = (credentials.isNewUser == 'true');
        user.user.isNewUser = isTrueSet;

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return Promise.resolve(user);
        }
        // If you return null or false then the credentials will be rejected
        return Promise.resolve(null);
        // You can also Reject this callback with an Error or with a URL:
        // return Promise.reject(new Error('error message')) // Redirect to error page
        // return Promise.reject('/path/to/redirect')        // Redirect to a URL
      },
    }),
  ],
  site: process.env.NEXTAUTH_URL,

  database: process.env.NEXT_PUBLIC_DATABASE_URI,
  session: {
    jwt: true,
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  jwt: {
    secret: process.env.JWT_SECRET,
  },

  pages: {
    signIn: '/login',
  },

  callbacks: {
    session: async (session, user) => {
      session.jwt = user.jwt;
      session.id = user.id;
      session.user = user.user;
      return Promise.resolve(session);
    },
    jwt: async (token, user) => {
      const isSignIn = !!user;
      if (isSignIn) {
        token.jwt = user.jwt;
        token.id = user.user.id;
        token.user = user.user;
      }
      return Promise.resolve(token);
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
