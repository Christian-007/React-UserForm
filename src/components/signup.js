import React from 'react';
import { SignupForm } from './signup_form';

export class Signup extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3><strong>Signup Form</strong></h3>
        </div>
        <div className="panel-body">
          <SignupForm/>
        </div>
      </div>
    )
  }
}