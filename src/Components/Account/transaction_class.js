const SHA256 = require('crypto-js/sha256');


class Transaction {
    constructor(fromAddress, toAddress, amount, hash, timestamp) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
        this.timestamp = timestamp;
        this.hash = hash

    }

    calculateHash() {
        return SHA256(this.fromAddress + this.toAddress + this.amount).toString;

    }


}

export default Transaction; 