import { MongoClient } from 'mongodb';

require('dotenv').config();

let cached = global.mongo;

if (!cached) {
  // eslint-disable-next-line
  cached = global.mongo = { conn: null, promise: null };
}

export const connectToDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = MongoClient.connect(process.env.NEXT_PUBLIC_DATABASE_URI, opts)
      .then((client) => ({
        client,
        db: client.db('persquad'),
      }));
  }

  cached.conn = await cached.promise;
  return cached.conn;
};
