//Modules
import React, { Component } from "react";

//CSS
import "./App.css";
import styles from "./App.module.css";

//Components
import DiceDisplay from "./components/DiceDisplay/DiceDisplay";
import RollBtn from "./components/RollBtn/RollBtn";
import Selector from "./components/Selector/Selector";
import Total from "./components/Total/Total";

export default class App extends Component {
  render() {
    return (
      <div className={`App ${styles.container}`}>
        <Selector />
        <DiceDisplay />
        <RollBtn />
        <Total />
      </div>
    );
  }
}
