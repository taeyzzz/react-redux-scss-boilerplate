import React from 'react'
import { browserHistory } from 'react-router'
import { inject, observer } from 'mobx-react';


// @inject('BirdStore', 'AnimalStore')
// @observer
class Application extends React.Component{
  constructor(props) {
    super(props)
  }

  handleAddBird(){
    this.props.BirdStore.addBird('bird');
  }

  handleAddAnimal(){
    this.props.AnimalStore.addAnimal('animal');
  }

  hanleGetList(){
    this.props.BirdStore.getListBird();
  }

  render() {
    const { BirdStore, AnimalStore } = this.props;
    return (
      <div>
        hello
        <button onClick={() => browserHistory.push('/a')} >GO TO A</button>
        {this.props.BirdStore.birdCount}
        <button onClick={() => this.handleAddBird()} >add bird</button>
        <button onClick={() => this.handleAddAnimal()} >add animal</button>
        {this.props.AnimalStore.animalCount}
        <button onClick={() => this.hanleGetList()} >getList </button>
      </div>
    )
  }
}

export default inject('BirdStore', 'AnimalStore')(observer(Application))
