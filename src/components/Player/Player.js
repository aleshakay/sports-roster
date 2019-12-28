import React from 'react';
import './Player.scss';
import PropType from 'prop-types';

import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    setSinglePlayer: PropType.func,
  }

  render() {
    const { player } = this.props;
    return (
      <div className="Player col-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-img-top">{player.imageUrl}</h4>
            <h4 className="card-title">{player.name}</h4>
            <h6 className="card-text">{player.position}</h6>
            <button className="btn-outline-danger">Edit</button>
            <button className="btn-outline-danger">Delete</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Player;
