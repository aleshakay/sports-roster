import React from 'react';
import PropTypes from 'prop-types';

import './Player.scss';
import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: PropTypes.arrayOf(playerShape.playerShape),
    setEditMode: PropTypes.func,
    setPlayerToEdit: PropTypes.func,
    deleteAPlayer: PropTypes.func,
  }

  setSelectedPlayerId = (e) => {
    e.preventDefault();
    const { setSingleBoard, player } = this.props;
    setSingleBoard(player.id);
  }

  setEditMode = (e) => {
    const { setEditMode, player, setPlayerToEdit } = this.props;
    e.preventDefault();
    setEditMode(true);
    setPlayerToEdit(player.id);
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, deleteAPlayer } = this.props;
    deleteAPlayer(player.id);
  }


  render() {
    const { player } = this.props;
    return (
      <div className="playercd col-4">
        <div className="card">
          <div className="card-body">
            <img src={player.imageUrl} className="card-img-top" alt="..."/>
            <h4 className="card-title">{player.name}</h4>
            <h6 className="card-text">{player.position}</h6>
            <button className="btn-outline-danger" onClick={this.setEditMode}>Edit</button>
            <button className="btn-outline-danger" onClick={this.deletePlayerEvent}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
