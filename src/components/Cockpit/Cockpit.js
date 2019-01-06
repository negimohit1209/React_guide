import React from 'react';
import styles from './Cockpit.module.css';


const Cockpit = (props) => {
let classes = [];
let btnClass = '';
if(props.persons.length <= 2){
  classes.push( styles.red );
}
if(props.persons.length <= 1){
  classes.push( styles.bold );
}
if(props.showPerson){
    btnClass = styles.Red;
}
  return (
    <div className={styles.Cockpit}>
    <h1>Hi i m react app.</h1>
    <p className={classes.join(" ")}>hey there i m using watsapp.</p>
    <button 
    className = {btnClass}
    onClick={props.toggle}>Toggle Person</button>
    </div>
  )
}

export default Cockpit;
