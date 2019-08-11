import React from 'react';

import './styles.css';
import PropTypes from 'prop-types';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this._password = null;
    this._email = null;
    this._form = null;
  }

  render() {
    return (
      <div class="container login-container">
        <div class="row">
          <div class="col-md-12 login-form-2">
            <form ref ={(form)=>{this._form=form;}}>
              <h3>Login Form</h3>
              <div class="form-group">
                <input required
                  type="email"
                  size="30"
                  class="form-control"
                  placeholder="Your Email *"
                  defaultValue=""
                  ref ={(input)=>{this._email=input;}}/>
              </div>
              <div class="form-group">
                <input required
                  type="password"
                  class="form-control"
                  placeholder="Your Password *"
                  defaultValue=""
                  ref ={(input)=>{this._password=input;}} />
              </div>
              <div class="form-group">
                <center>
                  <input
                    onClick={()=> this.props.handleLogin(this._email, this._password, this._form)}
                    type="submit"
                    class="btnSubmit"
                    value="Login" />
                </center>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  userList: PropTypes.array,
  handleLogin: PropTypes.func
}

export default Home;