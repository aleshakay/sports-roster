import React from 'react';
import PropTypes from 'prop-types';

import './Roster.scss';
import authData from '../../helpers/data/authData';

class Roster extends React.Component {
  static propTypes = {
    savePlayer: PropTypes.string,
    playerToEdit: PropTypes.func,
    editMode: PropTypes.bool,
    updatePlayer: PropTypes.func,
  }

  state = {
    imageUrl: '',
    name: '',
    position: '',
  }

  componentDidMount() {
    const { playerToEdit, editMode } = this.props;
    if (editMode) {
      this.setState({ imageUrl: playerToEdit.imageUrl, name: playerToEdit.name, position: playerToEdit.position });
    }
  }

  savePlayerEvent = (e) => {
    const { addPlayer } = this.props;
    e.preventDefault();
    const newPlayer = {
      imageUrl: this.state.imageUrl,
      name: this.state.name,
      position: this.state.position,
      uid: authData.getUid(),
    };
    addPlayer(newPlayer);
    this.setState({ imageUrl: '', name: '', position: '' });
  }

  updatePlayerEvent = (e) => {
    e.preventDefault();
    const { updatePlayer, playerToEdit } = this.props;
    const updatedPlayer = {
      imageUrl: this.state.imageUrl,
      name: this.state.name,
      position: this.state.position,
      uid: playerToEdit.uid,
    };
    updatePlayer(playerToEdit.id, updatedPlayer);
  }

  imageUrlChange = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ position: e.target.value });
  }


  render() {
    const { editMode } = this.props;
    return (
      <form className='col-6 offset-3 PlayerForm'>
      <div className="form-group">
        <label htmlFor="order-name">Player image:</label>
        <input
          type="text"
          className="form-control"
          id="player-name"
          placeholder="Enter Player name:"
          value={this.state.imageUrl}
          onChange={this.imageUrlChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="order-name">Player Name:</label>
        <input
          type="text"
          className="form-control"
          id="player-name"
          placeholder="Enter Player name:"
          value={this.state.name}
          onChange={this.nameChange}
        />
      </div>
      <div className="form-group">
      <label htmlFor="description-name">Player Position:</label>
      <input
        type="text"
        className="form-control"
        id="player-position"
        placeholder="Enter player position"
        value={this.state.position}
        onChange={this.positionChange}
      />
    </div>
    {
      !(editMode) ? (<button className="btn btn-secondary" onClick={this.savePlayerEvent}>Save Player</button>) : (<button className="btn btn-warning" onClick={this.updatePlayerEvent}>Update Player</button>)
    }
  </form>);
  }
}

export default Roster;
