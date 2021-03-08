import './Custom.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/app.action';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login_Register/Login';
import NavbarDC from './Components/Navbar/NavbarDC';
import Dashboard from './Components/Dashboard/Dashboard';
import CreateKeys from './Components/Login_Register/CreateKeys';
import Account from './Components/Account/Account';
import Footer from './Components/Footer/Footer';
import transactionOfBlock from './Components/Dashboard/transactionsOfBlock'
import Page404 from './Page404';


function App(props) {
  if (props.applicationState.user !== false) {
    return (

    <Router>

      <NavbarDC />

      <Container>
        <Switch>
            <Route path="/" exact component={Dashboard} /> 
            {/* change path */}
            <Route path="/registerKeys" component={CreateKeys} />
            <Route path="/login" component={Login} />
            <Route path="/account" component={Account} />
            <Route path="/transactions" component={transactionOfBlock} />
            <Route path="*" component={Page404} />
        </Switch>
      </Container>

      <Footer/>

    </Router>

  );
    }else {
      return (

        <Router>
    
          <NavbarDC />
    
          <Container>
            <Switch>
                <Route path="/" exact component={Dashboard} /> 
                <Route path="/registerKeys" component={CreateKeys} />
                <Route path="/login" component={Login} />
                <Route path="/transactions" component={transactionOfBlock} />
                <Route path="*" component={Page404} />
            </Switch>
          </Container>
    
          <Footer/>
    
        </Router>
      )
    }
}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(App);