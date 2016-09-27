import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class Player extends React.Component {

  _increment(e) {
    this.props.store.clicks++
  }

  render() {
    return (
      <div id="player">
        <img src="assets/images/cookie.svg" onClick={this._increment.bind(this)}></img>
      </div>
    );
  }
}
