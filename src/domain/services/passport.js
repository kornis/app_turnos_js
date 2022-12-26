const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.PASSPORT_SECRET || "s3Cr3T";
//opts.issuer = 'accounts.examplesoft.com';
//opts.audience = 'yoursite.net';

const jwtStrategy = new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
});


const encode = function(payload) {
    return jwt.sign({ data: payload }, process.env.PASSPORT_SECRET, { expiresIn: "7d" });
}

module.exports = {
    jwtStrategy,
    encode
}