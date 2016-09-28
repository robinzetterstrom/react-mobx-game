import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class Player extends React.Component {

  _increment(e) {
    this.props.store.player.points = this.props.store.player.points + this.props.store.player.cps.click
  }

  render() {
    return (
      <div id="player">
        <img src="dist/assets/images/cookie.svg" onClick={this._increment.bind(this)}></img>
      </div>
    );
  }
}
