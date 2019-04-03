//Modules
import React from "react";
import { connect } from "react-redux";
//Action Creators
import { updateResult, canShow } from "../../actions/actions";
//CSS
import styles from "./RollBtn.module.css";

function RollBtn({ updateResult, noOfDice, canShow }) {
  const handleRollDice = () => {
    // Choose random numbers
    let arr = [];
    for (let i = 0; i < noOfDice; i++) {
      const randomNum = Math.floor(Math.random() * 6) + 1;
      arr.push(randomNum);
    }
    canShow();
    //Force refresh by setting to a blank array and have a
    // slight pause before setting new array
    updateResult([]);
    setTimeout(() => {
      updateResult(arr);
    }, 300);
  };
  return (
    <div className={styles.btnContainer}>
      <button className={styles.btn} onClick={handleRollDice}>
        Roll!
      </button>
    </div>
  );
}

const mapStateToProps = state => ({ noOfDice: state.noOfDice });
const mapDispatchToProps = { updateResult, canShow };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RollBtn);
