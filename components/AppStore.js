import { observable } from 'mobx';

class AppStore {
  @observable clicks = 0;
  @observable player = {name: "Player", points: 0};
}

var store = window.store = new AppStore;
export default store;
