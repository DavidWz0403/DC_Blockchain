import React, { Component } from 'react'
// import { EC } from 'elliptic';
import { Button, Alert } from 'react-bootstrap';
import User from '../class';
import Login from './Login';


class CreateKeysCopy extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: {
                user: [{
                    publicKey: "",
                    privateKey: ""
                }]

            }
        }
    }

    generateKeys = () => {
        const EC = require('elliptic').ec;
        const ec = new EC('secp256k1');
        const key = ec.genKeyPair();

        this.setState(prevState => ({
            users: [{
                user: {
                    publicKey: key.getPublic('hex'),
                    privateKey: key.getPrivate('hex')
                }
            }]
        }))

        this.setState({
            users: [this.state.users, this.state.user]
        })
        // this.setState(prevState => {
        //     let user = { ...prevState.user };
        //     user.publicKey = key.getPublic('hex');
        //     user.privateKey = key.getPrivate('hex');
        //     user = [...this.state.user, user.privateKey, user.publicKey];
        //     return { user };
        // })

        console.log(this.state.users)
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
                <p>Your public key: </p>
                <p>Your private key: </p>
                <Button variant="outline-info"
                    onClick={this.generateKeys}
                    disabled={this.state.showButton}>
                    Generate Wallet
                </Button>
                <Login pubKey={this.state.publicKey} privKey={this.state.privateKey}
                    userData={this.state.userData} />
            </div>
        )
    }

}

export default CreateKeysCopy; 