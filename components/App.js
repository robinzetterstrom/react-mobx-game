import React from 'react';
import Player from './Player/PlayerComponent';
import Bank from './Bank/PlayerBalance';
import Upgrades from './Upgrades/UpgradeBox';

// Lets create a component that holds all the application components and pass in the MobX Store to all of them
export default class GameObject extends React.Component {
  render() {
    return (
      <div>
        <Upgrades store={store} />
        <Bank store={store} />
        <Player store={store} />
      </div>
    );
  }
}
