import React from 'react';
import './PlayerContainer.scss';

import Players from '../Players/Players';
import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/authData';
import Roster from '../Roster/Roster';

class PlayerContainer extends React.Component {
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
    this.setState({ playerToEdit: player });
  }

  setShowPlayerForm = () => {
    this.setState({ showPlayerForm: true });
  }

  updatePlayer = (playerId, updatePlayer) => {
    playerData.updatePlayer(playerId, updatePlayer)
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
    return (
      <div className="container">
      <div className="d-flex flex-wrap buttonRow"><button className="btn-lg addBtn" onClick={this.setShowPlayerForm}>Add New Player</button></div>
      { this.state.showPlayerForm && <Roster addPlayer={this.addPlayer} editMode={this.state.editMode} playerToEdit={this.state.playerToEdit} updatePlayer={this.updatePlayer} />}
      {this.state.players.map((player) => (<Players key={player.id} player={player} deleteAPlayer={this.deleteAPlayer} playerForm={this.playerForm} setEditMode={this.setEditMode} setPlayerToEdit={this.setPlayerToEdit}/>))}
      </div>
    );
  }
}

export default PlayerContainer;
