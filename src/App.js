import React, { Component } from 'react';
import Person from './Person/Person';
import styles from './App.module.css';
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary"

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
    let btnClass = '';

    if(this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
            <Person
            name={person.name} 
            age={person.age}
            click = {() => this.deletePersonHandler(index)}
            
            changed={(event) => this.nameChange(event , person.id)}
            /></ErrorBoundary>
          })}
        </div>
      );
      btnClass = styles.Red;
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push( styles.red );
    }
    if(this.state.persons.length <= 1){
      classes.push( styles.bold );
    }
    return (
      
      <div className={styles.App}>
      <h1>Hi i m react app.</h1>
      <p className={classes.join(" ")}>hey there i m using watsapp.</p>
      <button 
      className = {btnClass}
      onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}
    </div>
  
      
    );
  }
}

export default App;
