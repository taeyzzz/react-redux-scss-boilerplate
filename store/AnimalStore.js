import { observable, action, computed } from 'mobx';

class AnimalStore {
  @observable animal = [];

  @action
  addAnimal = bird => {
    this.animal.push(bird);
  };

  @computed
  get animalCount() {
    return this.animal.length;
  }
}

const singleton = new AnimalStore();
export default singleton;
