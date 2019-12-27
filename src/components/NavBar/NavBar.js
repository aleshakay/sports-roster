import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './NavBar.scss';

class NavBar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;

    return (
      <div className="NavBar">
        <div class="container display-flex">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <span class="navbar-brand" href="#">Tennis Roster</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            </ul>
            <div className="form-inline my-2 my-lg-0">
              { authed ? (<button className="nav-link btn btn-danger" onClick={this.logMeOut}>Logout</button>) : ('') }
            </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;
