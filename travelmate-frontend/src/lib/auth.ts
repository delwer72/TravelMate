import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { admin } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI!);
const db = client.db(process.env.AUTH_DB_NAME);

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  database: mongodbAdapter(db, { client }),
  user: {
    additionalFields: {
      plan: {
        type: "string",
        defaultValue: "guest_free",
        input: true, // Allows client to send plan
      },
    },
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          // Securely set role on the server based on the selected plan
          const role = user.plan === "user_free" ? "user" : "guest";
          return {
            data: {
              ...user,
              role,
            },
          };
        },
      },
    },
  },
  plugins: [
    admin(),
  ],
});