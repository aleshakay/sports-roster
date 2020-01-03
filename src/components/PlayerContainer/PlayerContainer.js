import React from 'react';
import PropTypes from 'prop-types';
import './PlayerContainer.scss';

import Player from '../Player/Player';
import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/authData';
import Roster from '../Roster/Roster';

class PlayerContainer extends React.Component {
  static propTypes = {
    setSinglePlayer: PropTypes.func,
  }

  state = {
    players: [],
    editMode: false,
    playerToEdit: {},
    showPlayerForm: false,
  }

  componentDidMount() {
    this.getPlayers();
  }

  getPlayers = () => {
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => {
        this.setState({ players });
      })
      .catch((errFromPlayerContainer) => console.error({ errFromPlayerContainer }));
  }

  addPlayer = (newPlayer) => {
    playerData.savePlayer(newPlayer)
      .then(() => {
        this.getPlayers();
        this.setState({ showPlayerForm: false });
      })
      .catch((errorFromSavePlayer) => console.error({ errorFromSavePlayer }));
  }

  setEditMode = (editMode) => {
    this.setState({ editMode, showPlayerForm: true });
  }

  setPlayerToEdit = (player) => {
    this.setState({ PlayerToEdit: player });
  }

  setShowPlayerForm = () => {
    this.setState({ showPlayerForm: true });
  }

  updatePlayer = (playerId, updatedPlayer) => {
    playerData.updatePlayer(playerId, updatedPlayer)
      .then(() => {
        this.getPlayers();
        this.setState({ editMode: false, showPlayerForm: false });
      })
      .catch((errorFromUpdatePlayer) => console.error({ errorFromUpdatePlayer }));
  }

  deleteAPlayer = (playerId) => {
    playerData.deletePlayer(playerId)
      .then(() => {
        this.getPlayers();
      })
      .catch((errorFromDeletePlayer) => console.error({ errorFromDeletePlayer }));
  }

  render() {
    const { setSinglePlayer } = this.props;

    return (
      <div className= "d-flex flex-wrap">
      <button onClick={this.setShowPlayerForm}>Add New Player</button>
      { this.state.showPlayerForm && <Roster addPlayer={this.addPlayer} editMode={this.state.editMode} playerToEdit={this.state.playerToEdit} updatePlayer={this.updatePlayer} /> }
      {this.state.players.map((player) => (<Player key={player.id} player={player} setSinglePlayer={setSinglePlayer} setEditMode={this.setEditMode} setPlayerToEdit={this.setPlayerToEdit} deleteAPlayer={this.deleteAPlayer} />))}

      </div>
    );
  }
}

export default PlayerContainer;
