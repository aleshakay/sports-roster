import React from 'react';
import PropTypes from 'prop-types';
import './PlayerContainer.scss';

import Player from '../Player/Player';
import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/authData';

class PlayerContainer extends React.Component {
  static propTypes = {
    setSinglePlayer: PropTypes.func,
  }

  state = {
    players: [],
  }

  getPlayers = () => {
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => {
        this.setState({ players });
      })
      .catch((errFromPlayerContainer) => console.error({ errFromPlayerContainer }));
  }

  componentDidMount() {
    this.getPlayers();
  }

  render() {
    return (
      <div>
      {this.state.players.map((player) => (<Player key={player.id} player={player} />))}

      </div>
    );
  }
}

export default PlayerContainer;
