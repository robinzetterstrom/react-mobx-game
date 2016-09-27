import React from 'react';
import Player from './Player/PlayerComponent';
import Upgrades from './Upgrades/UpgradeBox';

export default class GameObject extends React.Component {
  render() {
    return (
      <div>
        <Upgrades />
        <Player store={store} />
      </div>
    );
  }
}
