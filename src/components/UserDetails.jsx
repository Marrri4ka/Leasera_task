import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function UserDetails(props) {
  return (
    <div class="content">
      <div class="card">
        <div class="firstinfo"><img src="https://picsum.photos/200/300"/>
          <div class="profileinfo">
            <h1>{props.firstName}{props.lastName}</h1>
            <h3><strong>Age:</strong> {props.age}</h3>
            <li class="bio"><strong>Email: </strong>{props.email}</li>
            <li class="bio"><strong>Password: </strong>{props.password}</li>
          </div>
        </div>
      </div>
    </div>
  )
}

UserDetails.propTypes = {
  age: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string
}


export default UserDetails;