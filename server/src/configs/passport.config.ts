import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import {
  GOOGLE_CALLBACK_URI,
  GOOGLE_CLIENT_ID,
  GOOGLE_SECRET_ID,
} from "./env.config.js";
import prisma from "./prisma.Dbconfig.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID!,
      clientSecret: GOOGLE_SECRET_ID!,
      callbackURL: GOOGLE_CALLBACK_URI,
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;
        const profileUrl = profile.photos?.[0]?.value;

        if (!email) {
          return done(null, false);
        }

        const existingUser = await prisma.user.findUnique({
          where: { email },
        });

        
        if (!existingUser) {
          return done(null, false);
        }

        
        if (!profileUrl || existingUser.profileUrl !== profileUrl) {
          console.log("ran")
          await prisma.user.update({
            where: { email },
            data: { profileUrl },
          });
        }

        
        return done(null, existingUser);
      } catch (err) {
        return done(err as Error, false);
      }
    },
  ),
);

export default passport;
