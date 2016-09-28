import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class Item extends React.Component {

  _buyUpgrade() {
    let {player, perks} = this.props.store;

    if (this.props.store.player.points >= this.props.cost) {
      // Decrase player.points when we buy perks
      this.props.store.player.points = this.props.store.player.points - this.props.cost;
      //Increase perk level
      this.props.store.perks.collection[this.props.id].level++;
    }
  }

  render() {
    // Check if we've bought any upgrades and if so, show a badge with current perk level
    let checkLevel = this.props.level > 0 ? <span className='level'>{this.props.level}</span>:null;
    // Check if upgrade can be purchased, if not, disable the button
    let canPurchase = (this.props.store.player.points < this.props.cost) ? true:false;

    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.type}</td>

        <td><button disabled={canPurchase} onClick={this._buyUpgrade.bind(this)}>
        {checkLevel}
        {this.props.cost}$
        </button></td>
      </tr>
    );
  }
}
