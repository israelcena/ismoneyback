import { MongoClient } from 'mongodb';

const {
  MONGODB_URI = '',
} = process.env;

export const client = new MongoClient(MONGODB_URI);
export const db = client.db();