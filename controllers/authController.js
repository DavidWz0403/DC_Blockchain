const User = require("../models/user.model");

const handleSignIn = async (req, res) => {
    const loginData = req.body;
    const walletName = loginData.walletName;
    const privateKey = loginData.privInput;
    const message = "Private key incorrect!";
    const user = await User.findOne({ walletName });

    if (!user || !privateKey) res.status(401).json({ success: false, message });

    if (!user.validPrivateKey(privateKey))
        res.status(401).json({ success: false, message });

    res.json({
        success: true,
        userData: {
            walletName: user.walletName,
            publicKey: user.publicKey,
            balance: user.balance,
        },
        token: user.generateJWT(),
    });
};
module.exports = handleSignIn;
