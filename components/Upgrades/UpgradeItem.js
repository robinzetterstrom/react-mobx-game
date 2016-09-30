import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class Item extends React.Component {

  _buyUpgrade() {
    let perk = this.props.store.perks.collection[this.props.id];
    let player = this.props.store.player;

    if (this.props.store.player.points >= this.props.cost) {
      // Algorithm to increase price of the perk we just upgraded
      let newPrice = Math.floor((this.props.cost * 1.17) + this.props.cost);
      // Decrase player.points when we buy perks
      player.points = player.points - this.props.cost;
      //Increase perk level
      perk.level++;
      // Set new price to perk after the upgrade
      perk.cost = newPrice;
      // Increase click actions based on perk type
      if (this.props.type == 0) {
        player.event.click++
      } else if (this.props.type == 1) {
        player.event.idle++;
      }
      // If we have bought any idle perks, lets increment our points every second
        if (this.props.store.player.event.idle > 0) {
          this.interval = setInterval(() => {
            player.points = player.points + player.event.idle
          }, 1000);
        }
    }
  }

  componentWillUnmount() {
    // If we're in some case where about to unmounts the component, clear the this.interval
    clearInterval(this.interval);
  }

  render() {
    // Check if we've bought any upgrades and if so, show a badge with current perk level
    let checkLevel = this.props.level > 0 ? <span className='level'>{this.props.level}</span>:null;
    // Check if upgrade can be purchased, if not, disable the button
    let canPurchase = (this.props.store.player.points < this.props.cost) ? true:false;

    return (
      <tr>
        <td>{this.props.name}</td>

        <td><button disabled={canPurchase} onClick={this._buyUpgrade.bind(this)}>
        {checkLevel}
        {this.props.cost}$
        </button></td>
      </tr>
    );
  }
}
