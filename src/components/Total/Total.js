//Modules
import React from "react";
import { connect } from "react-redux";

//CSS
import styles from "./Total.module.css";

function Total({ result, canShow }) {
  const adder = () => result.reduce((acc, curr) => acc + curr, 0);

  return (
    <h1 className={styles.total}>
      Total : <span className={styles.tot}>{canShow && adder()}</span>
    </h1>
  );
}

const mapStateToProps = state => ({
  result: state.result,
  canShow: state.canShow
});

export default connect(
  mapStateToProps,
  null
)(Total);
