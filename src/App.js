import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import axios from './axios-db';
import {
  Switch,
  Route
} from 'react-router-dom';
import UserDetails from './components/UserDetails';
import {
  withRouter
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      userList: []
    };

    let that = this;
    let userListDb = [];
    axios.get('/User.json').then(function(response) {
      Object.keys(response.data).forEach(function(key) {
        userListDb.push(response.data[key]);

      })

      that.setState({
        userList: userListDb
      });
    });
  }

  handleLogin(_email, _password, _form) {
    if (_form.reportValidity()) {

      let found = false;
      this.state.userList.map((user) => {

        if (user.email === _email.value && user.password === _password.value) {
          found = true;
          this.setState({
            age: user.age,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password
          })
          this.props.history.push('/details');
        }

      });
      if (found === false) {
        alert("Could not find this email and password combination");
      }
    }

  }
  render() {
    return (
      <div>
      <Switch>
      <Route exact path='/' render ={()=> <Home handleLogin={this.handleLogin} userList={this.state.userList}/>}/>
      <Route  path='/details' render ={()=> <UserDetails age={this.state.age} email={this.state.email} password={this.state.password} lastName={this.state.last_name}firstName = {this.state.first_name}/>}/>
      </Switch>

    </div>
    );
  }
}
export default withRouter(App);