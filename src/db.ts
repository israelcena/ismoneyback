import { MongoClient } from 'mongodb';

const {
  MONGODB_URI = 'mongodb+srv://cenaloc:123genov@cenaloc.6myyp.mongodb.net/?retryWrites=true&w=majority',
} = process.env;

export const client = new MongoClient(MONGODB_URI);
export const db = client.db();