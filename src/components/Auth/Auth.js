import React from 'react';
import firebase from 'firebase/app';
import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
        <button className="btn btn-dark" onClick={this.loginClickEvent}> LogIn with Google</button>
      </div>
    );
  }
}

export default Auth;
