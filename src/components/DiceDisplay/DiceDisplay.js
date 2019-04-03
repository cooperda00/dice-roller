//Modules
import { connect } from "react-redux";
import React from "react";
//CSS
import styles from "./DiceDisplay.module.css";
//Components
import DiceIcon from "./DiceIcon/DiceIcon";

function DiceDisplay({ result, canShow }) {
  return (
    <div className={styles.display}>
      {canShow && result.map(num => <DiceIcon num={num} />)}
    </div>
  );
}

const mapStateToProps = state => ({
  result: state.result,
  canShow: state.canShow
});

export default connect(
  mapStateToProps,
  null
)(DiceDisplay);
