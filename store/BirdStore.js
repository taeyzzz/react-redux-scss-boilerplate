import { observable, action, computed } from 'mobx';

class BirdStore {
  @observable birds = [];

  @action
  addBird = bird => {
    this.birds.push(bird);
  };

  @action
  getListBird = async () => {
    const res = await fetch('http://localhost:8000/listAgent', {
      method: 'GET', // or 'PUT'
      // body: JSON.stringify({}), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const a = await res.json()
    this.birds = a.doc
  };

  @computed
  get birdCount() {
    return this.birds.length;
  }
}

const singleton = new BirdStore();
export default singleton;
