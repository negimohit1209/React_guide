import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';


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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;
    if(this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            name={person.name} 
            age={person.age}
            click = {() => this.deletePersonHandler(index)}
            key={person.id}
            changed={(event) => this.nameChange(event , person.id)}
            />
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi i m react app.</h1>
        <button 
        style= {style}
        onClick={this.togglePersonHandler}>Toggle Person</button>
          {persons}
      </div>
    );
  }
}

export default App;
