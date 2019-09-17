//if email and password is provided on the front-end, we can validate it
import * as passport from 'passport'
import * as localStrategy from 'passport-local'
import { comparePassword } from '../utils/security/passwords'
import db from '../db'


//user and done callback and call done with null and the user so user will be added on our request
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user))

passport.use(new localStrategy.Strategy({
    usernameField: 'email',
    session: false
},
    async (email, password, done) => {
        try {
            //find the user by their email address they typed on frontend
            let [user]: any = await db.Users.findUserByEmail(email)
            //if they exist and their password is correct, serialize the user
            if (user && comparePassword(password, user.password)) {
                done(null, user);
            } else {
                //if the user doesn't exist, call null and false in place of user
                done(null, false)
            }
        } catch (e) {
            console.log(e);
            done(e)
        }
    }));



