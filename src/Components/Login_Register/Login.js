import React, { Component } from 'react';
import { Button, Form, Alert, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './CreateKeys.css';
import config from '../../config/config';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {

            showSuccess: false,
            variant: "success",
            text: '',
            visible: false,

            loginData: {
                walletName: "",
                privInput: ""
            }


        }

    }



    setPrivInput = (e) => {
        const loginData = { ...this.state.loginData };
        loginData.privInput = e.target.value;

        this.setState({
            loginData
        })
    }

    setWalletName = (e) => {
        const loginData = { ...this.state.loginData };
        loginData.walletName = e.target.value;

        this.setState({
            loginData
        })
    }

    authentication = async () => {

        try {
            const res = await axios.post(config.baseUrl + '/login/login', this.state.loginData);
            const response = res.data;
            console.log(response.success)
            if (response.success === true) {
                this.state.variant = "success";
                this.state.showSuccess = true;
                this.props.actions.storeUserData(response.userData)
                this.props.history.push("/account")
            }

        } catch (err) {
            console.log('Error: ' + err)
            if (this.state.loginData.privInput === "" || this.state.loginData.walletName === "") {
                this.state.variant = "warning";
                this.state.text = "Please fill out the fields for your Wallet Name and your Password, DO NOT leave them empty!";
                this.state.showSuccess = true;
                console.log(this.state.showSuccess);
                this.forceUpdate();
            } else {
                this.state.variant = "danger";
                this.state.text = "The username and/or the password you provided was not correct, please try again!";
                this.state.loginData.privInput = "";
                this.state.showSuccess = true;
                console.log(this.state.showSuccess);
                this.forceUpdate();
            }
        }

        console.log('hello world')


    }

    changeVisibilty = () => {
        this.state.visible = !this.state.visible;
        this.forceUpdate();
    }



    showAlert = () => {
        console.log("ShowAlert function")
        if (this.state.showSuccess === true) {
            return (
                <Alert variant={this.state.variant} >
                    {this.state.text}
                </Alert>
            )
        }
    }





    render() {

        window.addEventListener('keydown', (event) => {
            if (event.isComposing || event.key === "Enter") {
                this.authentication();
            }
        });

        return (
            <>
                <div className="keys">
                </div>
                <div className="foreground">

                    <h1>Login</h1>
                    <br />
                    {this.showAlert()}

                    <Form>
                        <Form.Group controlId="textarea">
                            <Form.Label>Wallet Name<span>*</span></Form.Label>
                            <Form.Control value={this.state.walletName} onChange={this.setWalletName} required />
                            {/* <Form.Text className="text-muted">
                                Place your message here, <strong>won't be shared with any third parties!</strong>
                            </Form.Text> */}
                        </Form.Group>

                        <InputGroup controlId="textarea" className="mb-3">
                            <Form.Label className="labelInputGroup">Private Key<span>*</span></Form.Label>

                            <FormControl
                                type={this.state.visible ? "text" : "password"}
                                value={this.state.loginData.privInput}
                                onChange={this.setPrivInput}
                                required
                            />
                            <InputGroup.Append>
                                <Button variant="outline-dark" onClick={this.changeVisibilty}>{this.state.visible ? (<FaEyeSlash />) : (<FaEye />)}</Button>
                            </InputGroup.Append>
                        </InputGroup>

                        <Link to={this.state.to} value={false} >
                            <Button onClick={this.authentication}>
                                Sign in
                            </Button>
                        </Link>
                    </Form>
                    <p className="link"> You don't have an account yet? <a href="/registerKeys">Register here!</a></p>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(Login);
