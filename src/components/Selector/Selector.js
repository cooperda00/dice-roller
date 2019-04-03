//Modules
import React from "react";
import { connect } from "react-redux";

//CSS
import styles from "./Selector.module.css";

//Action Creators
import { updateNo } from "../../actions/actions";

function Selector({ noOfDice, updateNo }) {
  const handleUpdateNo = e => {
    const num = parseInt(e.target.value, 10);
    updateNo(num);
  };

  return (
    <div className={styles.selector}>
      <h3 className={styles.title}>No. of dice to roll:</h3>
      <select
        value={noOfDice}
        className={styles.input}
        onChange={handleUpdateNo}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
    </div>
  );
}

const mapStateToProps = state => ({ noOfDice: state.noOfDice });

const mapDispatchToProps = { updateNo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Selector);
