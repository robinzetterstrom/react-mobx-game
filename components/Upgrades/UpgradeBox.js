import React from 'react';

export default class Upgrades extends React.Component {
  render() {
    let perks = ['One', 'Two', 'Three', 'Four', 'Five'];
    return (
      <div id="upgrades">
        <ul>
          {perks.map((name, i) => {
              return <Item key={i} name={name} />
            })}
        </ul>
      </div>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  buyUpgrade() {
    console.log(this.props.name);
  }

  render() {
    return <li key={this.props.index} onClick={this.buyUpgrade.bind(this)}>{this.props.name}</li>
  }
}
