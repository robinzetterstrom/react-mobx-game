import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class Bank extends React.Component {
  render() {
    const { player } = this.props.store;

    return (
      <div id="points">
       {player.points}$
      </div>
    );
  }
}
