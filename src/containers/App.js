import React, { Component } from 'react';
import Persons from '../components/Presons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import styles from './App.module.css';

class App extends Component {
  state = {
    persons: [
      {id: 123, name:"Mohit" , age: 22},
      {id: 122,name: "ram", age: 21},
      {id: 124,name: "raja", age: 22}
    ],
    showPerson: false
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(index, 1);
    this.setState({
      persons
    } )
  }

  nameChange = (event , id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    })
  }

  render() {
    let persons = null;

    if(this.state.showPerson) {
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChange}/>
        </div>
      );
    }


    return (
      
      <div className={styles.App}>
      <Cockpit persons={this.state.persons} toggle={this.togglePersonHandler} showPerson={this.state.showPerson}/>
        {persons}
    </div>
  
      
    );
  }
}

export default App;
