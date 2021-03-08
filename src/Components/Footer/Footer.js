import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';
import './Footer.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.action';





function Footer() {
  return (
    <div className="main-footer">
      <Container className="Footer">
        <Row className="background">
              <Col>
                <a href="/Home">Contact</a>
              </Col>
              <Col>
                <a href="#!">About</a>
              </Col>
              <Col>
                <a href="#!">Support</a>
              </Col>
              <Col>
                <a href="#!">FAQ</a>
              </Col>
              <Col>
                <a href="#!">Join Us!</a>
              </Col>     
        </Row>
      </Container>
      <hr/>
      <Container className="FooterLinks">
        <Row>
          <Col  >
            <p>&copy; {new Date().getFullYear()} DCoin | All rights reserved  | <a href="https://www.talentgarden.com"> Terms of Service </a>| Privacy</p>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(Footer);