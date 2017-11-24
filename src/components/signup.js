import React from 'react';
import SignupForm from './signup_form';
import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/signupActions';
import PropTypes from 'prop-types';

class Signup extends React.Component {
  render() {
    const { userSignupRequest } = this.props;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3><strong>Signup Form</strong></h3>
        </div>
        <div className="panel-body">
          <SignupForm userSignupRequest={userSignupRequest}/>
        </div>
      </div>
    )
  }
}

Signup.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(Signup);