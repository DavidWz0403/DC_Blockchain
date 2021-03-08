// Contains API Calls that are necassary to get or post data to the sever
import axios from "axios";

class BlockchainAPI {
    constructor() {
        this.apiHost = "http://localhost:4000"
    }


    //2. API function post new account (publicKey & privateKey)

    postUserData = async (user) => {
        try {
            const response = await axios.post(`${this.apiHost}/users/add`, user);
            console.log(response.data);
        } catch (err) {
            console.log('Error: ' + err)
        }
    }
}
//1. API function displays all Blocks


//2. API function post new account (publicKey & privateKey)


//3. API function post all transactions


//4. API function displays all withdraws and deposits


//5. API Call MINING


export default BlockchainAPI; 