const router = require('express').Router();
let User = require('../models/user.model');
let Block = require('../models/block.model');
const createUser = require("../controllers/userController");
//const authGuard = require() "../middleware/authGuard");
const hasBody = require("../middlewares/hasBody");


router.route('/').get(async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (err) {
        res.json('Error:' + err);
    }
})


router.post("/add", hasBody, createUser);


router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getTransactions/:address').get(async (req, res) => {
    try {
        const publicAddress = req.params.address;
        const users = await User.find();

        let user = "";
        for (var i = 0; i < users.length; i++) {
            if (users[i].publicKey === publicAddress) {
                user = users[i];
            }
        }
        const publicKey = user.publicKey;

        const blocks = await Block.find();

        let transactions = [];


        for (let i = 0; i < blocks.length; i++) {
            const transaction = blocks[i].transactions;
            console.log(transaction.fromAdress);
            for (let j = 0; j < transaction.length; j++) {
                if (transaction[j].fromAdress === publicKey) {
                    transactions.push(transaction[j]);
                }
            }
        }

        res.json(transactions)


    } catch (err) {
        console.log(err);
    }
})
module.exports = router; 