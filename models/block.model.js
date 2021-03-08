const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    fromAddress: { type: String },
    toAddress: { type: String },
    amount: { type: Number },
    hashTx: { type: String },
    timestamp: { type: Date }
})

const BlockSchema = new Schema({
    id: { type: Number, required: true },
    hash: { type: String, required: true }, //merkletree hash
    previousHash: { type: String, required: true },
    nonce: { type: Number, required: true },
    timestamp: { type: Date, required: true },
    transactions: [],
    merkleHash: { type: String, required: true },
    transactionsMined: { type: Boolean },
    transactionHashes: [],
})


const Block = mongoose.model('Block', BlockSchema);

module.exports = Block; 