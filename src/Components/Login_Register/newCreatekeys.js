import React, { Component } from 'react'
import { Button, Alert } from 'react-bootstrap';
import User from '../class';
import Login from './Login';

class NewCreateKeys extends Component {

    constructor(props) {
        super(props)
        this.state = {
            publicKey1: "",
            privateKey1: "",
            showButton: false,
            showAlert: false,
            variant: "warning",
            userData: [],
            id: 0,

        }
        this.user = User;
    }


    generateKeys = () => {

        const EC = require('elliptic').ec;
        const ec = new EC('secp256k1');
        const key = ec.genKeyPair();
        this.setState({
            publicKey1: key.getPublic('hex'),
            privateKey1: key.getPrivate('hex'),
        })

        this.generateUser();

        console.log("privKey")
        console.log(this.state.privateKey);
        console.log("pub key")
        console.log(this.state.publicKey);

        //Post method

    }

    generateUser = () => {
        const EC = require('elliptic').ec;
        const ec = new EC('secp256k1');
        const key = ec.genKeyPair();

        const privateKey = key.getPrivate('hex');
        const publicKey = key.getPublic('hex');

        let userId = this.state.id + 1;
        const user = new User(this.state.id, publicKey,
            privateKey);

        const newUser = [user];
        this.setState({
            userData: newUser,
            showAlert: true,
            id: userId,
        })
        console.log(this.state.userData)
    }
    render() {

        return (
            <div>
                <Button variant="outline-info"
                    onClick={this.generateKeys}
                    disabled={this.state.showButton}>
                    Generate Wallet
                </Button>
                <Alert variant={this.state.variant} show={this.state.showAlert}>
                    Your public and private Key are unique. Make sure to store it safely.<br />
                If you are losing one of them, you will never be able to access your account again!!!.
                </Alert>
                <p>Your id: {this.state.id}</p>
                <p>Your public key: {publicKey}</p>
                <p>Your private key: {privateKey}</p>
                <Button variant="outline-info"
                    onClick={this.generateUser}
                    disabled={this.state.showButton}>
                    Generate Wallet
                </Button>
                <Login pubKey={this.state.publicKey} privKey={this.state.privateKey}
                    userData={this.state.userData} />
            </div>
        )
    }

}

export default NewCreateKeys; 
