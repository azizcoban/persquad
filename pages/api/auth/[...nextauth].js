import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    signIn: async () => Promise.resolve(true),
  },

  events: {
    signIn: async (message) => { console.log(message);/* on successful sign in */ },
    signOut: async (message) => { console.log(message);/* on signout */ },
    createUser: async (message) => { console.log(message);/* user created */ },
    linkAccount: async (message) => { console.log(message);/* account linked to a user */ },
    session: async (message) => { console.log(message); /* session is active */ },
    error: async (message) => { console.log(message);/* error in authentication flow */ },
  },
  // A database is optional, but required to persist accounts in a database

};

export default (req, res) => NextAuth(req, res, options);
