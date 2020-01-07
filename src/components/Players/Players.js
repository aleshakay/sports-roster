import React from 'react';
import PropTypes from 'prop-types';

import './Players.scss';
import playerShape from '../../helpers/propz/playerShape';

class Players extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    setEditMode: PropTypes.func,
    setPlayerToEdit: PropTypes.func,
    deleteAPlayer: PropTypes.func,
  }


  setEditMode = (e) => {
    const { setEditMode, player, setPlayerToEdit } = this.props;
    e.preventDefault();
    setEditMode(true);
    setPlayerToEdit(player);
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, deleteAPlayer } = this.props;
    deleteAPlayer(player.id);
  }


  render() {
    const { player } = this.props;
    return (
      <div className="flex-container playCont">
        <div className="playercd d-flex col-8 flex-wrap">
          <div className="card sportsCard">
            <div className="card-body">
              <h4 className="card-text flex-item">{player.name}</h4>
              <h6 className="card-text flex-item">{player.position}</h6>
              <img src={player.imageUrl} className="card-img-top flex-item" alt="..."/>
              <button className="btn-outline-danger" onClick={this.setEditMode}>Edit</button>
              <button className="btn-outline-danger" onClick={this.deletePlayerEvent}>Delete</button>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Players;
