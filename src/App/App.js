import React from 'react';
import firebase from 'firebase/app';

import firebaseConnection from '../helpers/data/connection';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../components/Auth/Auth';
import './App.scss';
import NavBar from '../components/NavBar/NavBar';

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListner = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  renderView = () => {
    const { authed } = this.state;
    if (!authed) {
      return (<Auth />);
    }
  }

  componentWillUnmount() {
    this.removeListner();
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <NavBar authed={authed} />
        {this.renderView()}
      </div>
    );
  }
}
export default App;
