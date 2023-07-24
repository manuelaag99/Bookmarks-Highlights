const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const User = require("../models/user");
const HttpError = require("../models/http-error");

passport.use(new GoogleStrategy(
        {
            clientID:process.env.CLIENT_ID,
            clientSecret:process.env.CLIENT_SECRET,
            callbackURL: "/auth/google/callback"
        },
        async (accessToken, refreshToken, profile, callback) => {
            try {
                const existingUser = await User.findOne({ googleId: profile.id });

                if (existingUser) {
                    return done(null, existingUser);
                }

                console.log(profile);
                const newUser = new User({
                    email: profile.emails[0].value,
                    entries: []
                });
                await newUser.save();

                done(null, newUser);
            } catch (err) {
                return next (new HttpError("Sorry, could not create the new user!", 422));
            }
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user._id);
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(error, null);
    }
})

module.exports = passport;