import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import bcrypt from 'bcrypt';
import { connectToDB } from '../../../db/connect';
import { getUserByEmail } from '../../../db/user';

const options = {

  providers: [
    Providers.Credentials({

      name: 'Persquad Login',

      credentials: {
        username: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const { db } = await connectToDB();
        const user = await getUserByEmail(db, credentials.username);
        if (user) {
          const isPasswordSame = bcrypt.compareSync(credentials.password, user.password);
          if (isPasswordSame) {
            // Any object returned will be saved in `user` property of the JWT
            return Promise.resolve(user);
          }
        }

        // If you return null or false then the credentials will be rejected
        return Promise.resolve(null);
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

};

export default (req, res) => NextAuth(req, res, options);
