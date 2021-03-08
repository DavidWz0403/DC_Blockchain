const SHA256 = require('crypto-js/sha256');

// Data wwill be received from the Wallet making the transfer
// The information should be sent as a an Ojject contaiiniing 3 key:value properties:
// fromAddress, toAddress and amount

// This infor has to come from the the node/wallet that perfo


transactionObj = {
    fromAddress: 'dfgdfgdfkgdlfgödkflögöldfgdfg',
    toAddress: 'kfghhigdfkgödfkgdkögdflglllllldfkgödfkgökdfölglödfglldfögödfkerio',
    amount: '21'
}

transactionObj2 = {
    fromAddress: 'dfgdfgdfkgdlfgödkflögölkjdfjlkgd89d7fg8ddfgdfg',
    toAddress: 'kfghhigdfkgödfkgdkögdflgd8df9g09df89gdfglllllldfkgödfkgökdfölglödfglldfögödfkerio',
    amount: '241'
}

// Confirm that account has enough DC to transfer
// Create function to calculate total amount in wallet
balanceInWallet = () => {
    //check all from and to transactions and calculate total for the wallet

}

// create function to determine if wallet has enought to transfer
//returns true if yes and false if not
isTheBalenceEnough = () => {
    //check if amount to be removed is available in the wallet
    //Pending in wallet account if transaction is ok or denied if amount is not enough
}

class Transaction {
    constructor(fromAddress, toAddress, amount, transactionHash) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
        this.transactionHash = transactionHash
    }
}

createTransationObject = (fromAddress, toAddress, amount) => {
    const tHash = SHA256(fromAddress + toAddress + amount).toString();
    return new Transaction(fromAddress, toAddress, amount, tHash)
}

/* console.log(createTransationObject(transactionObj.fromAddress, transactionObj.toAddress, transactionObj.amount)) */

// Array to compile the transactions from the past 10min - it needs to be reseted every 10 mins

let transactionsArray = []

//Create function to push into the 10 min array the object in case it has enough balence

transactionsArray.push(createTransationObject(transactionObj.fromAddress, transactionObj.toAddress, transactionObj.amount))
transactionsArray.push(createTransationObject(transactionObj2.fromAddress, transactionObj2.toAddress, transactionObj2.amount))

console.log(transactionsArray)
console.log(transactionsArray[0].transactionHash)

// Send message to wallet that the transfer was executed when block is created

// Transaction needsto be saved

// Merkel hash-root tree

/* merkleTree = (transactionsArray) => {
    if (transactionsArray.length % 2 == 0){
        for(let i = 0; i < transactionsArray.length; i++){

        }

    } else

} */


//Create fnunction to transfer all hashes from the previous hour into an array
var asst = transactionsArray.map(obj => { return obj.transactionHash })

console.log(asst)


//let a = ['fsfsfsd', 'fsdsdfljjkl3248', 'eirotuerjbnf', 'jhkdg,bnvx889', 'oqowez76c8yxbas', 'jhkfdjhopqiwepq576cxyt']
//let a = ['fsfsfsd', 'fsdsdfljjkl3248', 'eirotuerjbnf', 'jhkdg,bnvx889', 'oqowez76c8yxbas', 'jhkfdjhopqiwepq576cxyt']
//let a = ['fsfsfsd', 'fsdsdfljjkl3248', 'eirotuerjbnf', 'jhkdg,bnvx889', 'oqowez76c8yxbas', 'jhkfdjhopqiwepq576cxyt']
//let a = ['fsfsfsd', 'fsdsdfljjkl3248', 'eirotuerjbnf', 'jhkdg,bnvx889', 'oqowez76c8yxbas', 'jhkfdjhopqiwepq576cxyt']
//let a = ['fsfsfsd', 'fsdsdfljjkl3248', 'eirotuerjbnf', 'jhkdg,bnvx889', 'oqowez76c8yxbas', 'jhkfdjhopqiwepq576cxyt']
let a = asst


//Merkle tree for even number of elements
merkleTreeHash = (a) => {
    console.log(a)
    let b = []
    if (lenght == 0) {
        SHA256(0).toString());
    }
    else if (a.length == 1) {
        console.log(a[0])
        return a[0]
    }
    else if (a.length % 2 != 0) {
        for (let i = 0; i < a.length - 1; i += 2) {
            if (a.length - i > 3) {
                b.push(SHA256(a[i] + a[i + 1]).toString())
            } else {
                b.push(SHA256(a[i] + a[i + 1]).toString())
                b.push(SHA256(a[i + 2]).toString())
                console.log(b)
            }
        }
        return merkleTreeHash(b)
    }
    else if (a.length == 2) {
        console.log(b)
        console.log(SHA256(a[0] + a[1]).toString())
        b.push(SHA256(a[0] + a[1]).toString())
        return merkleTreeHash(b)
    } else {
        for (let i = 0; i < a.length; i += 2) {
            b.push(SHA256(a[i] + a[i + 1]).toString())
        }
        console.log(b)
        return merkleTreeHash(b)
    }
}

console.log(merkleTreeHash(a))

//


merkleTreeHash = (a) => {
    console.log(a)
    let b = []
} else {
    for (let i = 0; i < a.length; i += 2) {
        b.push(SHA256(a[i] + a[i + 1]).toString())
    }
    console.log(b)
    return merkleTreeHash(b)
}
}
