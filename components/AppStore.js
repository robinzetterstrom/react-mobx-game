// Import our MobX to make our state management easier.
import { observable } from 'mobx';

class AppStore {
  // Declare our player object that contains player specific settings
  @observable player = {
    name: "Player",
    points: 0,
    cps: {
      click: 1,
      idle: 0
    }
  }

  // Declare our perk/upgrades object that contains a collection of upgrades
  @observable perks = {
    collection: [
      {"id": 0, "name": "Finger soreness", "type": "Click", "level": 0, "cost": 50 },
      {"id": 1, "name": "Clicker 2", "type": "CPS", "level": 0, "cost": 275 },
      {"id": 2, "name": "Clicker 3", "type": "CPS", "level": 0, "cost": 450 },
      {"id": 3, "name": "Clicker 4", "type": "CPS", "level": 0, "cost": 1000 },
      {"id": 4, "name": "No hands!", "type": "CPS", "level": 0, "cost": 1500 }
    ]}
}

var store = window.store = new AppStore;
export default store;
