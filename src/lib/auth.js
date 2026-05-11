// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.DB_URL);
// const db = client.db("Database");
// export const auth = betterAuth( {

//   emailAndPassword: { 
//     enabled: true, 
//   }, 
    
//   database: mongodbAdapter(db, {
//     // Optional: if you don't provide a client, database transactions won't be enabled.
//     client
//   }),
// });

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const uri = process.env.DB_URL;

// 🔥 env check (very important)
if (!uri) {
  throw new Error("❌ DB_URL is missing");
}

// 🔥 global cache (Next.js dev reload issue solve)
let client;
let db;

if (!global._mongoClient) {
  client = new MongoClient(uri);
  global._mongoClient = client.connect(); // connect once
} else {
  client = await global._mongoClient;
}

// DB select
db = client.db("Database");


export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },

  database: mongodbAdapter(db, {
    client,
  }),
});