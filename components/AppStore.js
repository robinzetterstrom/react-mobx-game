// Import our MobX to make our state management easier.
import { observable } from 'mobx';

class AppStore {
  // Declare our player object that contains player specific settings
  @observable player = {
    points: 0,
    event: {
      click: 1,
      idle: 0
    }
  }

  // Declare our perk/upgrades object that contains a collection of upgrades
  @observable perks = {
    collection: [
      {"id": 0, "name": "Finger soreness", "type": 0, "level": 0, "cost": 10 },
      {"id": 1, "name": "Robot Click", "type": 1, "level": 0, "cost": 275 },
      {"id": 2, "name": "I'm a machine", "type": 1, "level": 0, "cost": 800 },
      {"id": 3, "name": "Wealthy man", "type": 1, "level": 0, "cost": 2200 },
      {"id": 4, "name": "No hands!", "type": 1, "level": 0, "cost": 4000 }
    ]}
}

var store = window.store = new AppStore;
export default store;
