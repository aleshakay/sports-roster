import React from 'react';
import firebase from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import firebaseConnection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import NavBar from '../components/NavBar/NavBar';
import PlayerContainer from '../components/PlayerContainer/PlayerContainer';

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

  componentWillUnmount() {
    this.removeListner();
  }

  renderView = () => {
    const { authed } = this.state;
    if (!authed) {
      return (<Auth />);
    } if (authed) {
      return (<PlayerContainer />);
    }
    return (<PlayerContainer />);
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
