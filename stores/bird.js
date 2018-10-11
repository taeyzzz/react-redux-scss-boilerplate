import { observable, action, computed } from 'mobx';

class BirdStore {
  // to be implemented later on
  @observable birds = [];

  @action
  addBird = bird => {
    console.log(bird);
    this.birds.push(bird);
  };

  @computed
  get birdCount() {
    return this.birds.length;
  }
}

export default new BirdStore();
