import React from 'react';
import './Roster.scss';
import playerShape from '../../helpers/propz/playerShape';

class Roster extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;
    return (
      <div className="Roster col-4" />
    );
  }
}

export default Roster;
