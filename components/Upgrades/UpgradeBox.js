// Import React and MobX observer
import React from 'react';
import { observer } from 'mobx-react';
import Item from './UpgradeItem.js'

@observer
export default class Upgrades extends React.Component {
  render() {
    const { perks } = this.props.store;
    return (
      <div id="upgrades">
      <h3>Upgrades</h3>
        <table>
          <tbody>
            {perks.collection.map((perk, i) => {
                return <Item store={store} key={i} id={perk.id} name={perk.name} level={perk.level} type={perk.type} cost={perk.cost} />
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
