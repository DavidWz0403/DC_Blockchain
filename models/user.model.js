const mongoose = require('mongoose');
const crypto = require("crypto");
const jwt = require("jsonwebtoken");


const Schema = mongoose.Schema;


const UserSchema = new Schema({
    publicKey: { type: String, required: true },
    privateKey: {
        type: String,
        required: [true, "Password is required"],
    },
    walletName: { type: String, required: true },
    salt: String,
    avatar: String,
    balance: { type: Number },

})

function createHash(privKey, salt) {
    // info on salt and why you need it: https://stackoverflow.com/questions/50460701/why-to-store-salt-along-with-hashed-password-in-database
    salt = salt || crypto.randomBytes(16).toString("hex");

    return crypto
        .pbkdf2Sync(privKey, salt, 10000, 512, "sha512")
        .toString("hex");
}


UserSchema.methods = {
    ...UserSchema.methods,
    setPrivateKey(privKey) {
        this.salt = crypto.randomBytes(16).toString("hex");
        this.privateKey = crypto
            .pbkdf2Sync(privKey, this.salt, 10000, 512, "sha512")
            .toString("hex");
    },
    validPrivateKey(privKey) {
        const hash = createHash(privKey, this.salt);
        return this.privateKey === hash;
    },
    generateJWT() {
        return jwt.sign(
            {
                id: this._id,
                publicKey: this.publicKey,
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "60d" }
        );
    },
    toAuthJSON() {
        return {
            publicKey: this.publicKey,
            balance: this.balance,
            token: this.generateJWT(),
            avatar: this.avatar,
            walletName: this.walletName
        };
    },
};


const User = mongoose.model('User', UserSchema);

module.exports = User; 