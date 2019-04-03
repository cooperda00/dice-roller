//Modules
import React from "react";
import { Spring } from "react-spring";

//CSS
import styles from "./DiceIcon.module.css";

//Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDice,
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faDice,
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix
);

function DiceIcon({ num }) {
  const getNumberWord = () => {
    switch (num) {
      case 1:
        return "dice-one";
      case 2:
        return "dice-two";
      case 3:
        return "dice-three";
      case 4:
        return "dice-four";
      case 5:
        return "dice-five";
      case 6:
        return "dice-six";
      default:
        return "dice";
    }
  };

  return (
    <Spring
      from={{ opacity: 0, transform: "translate(0, 1000px) rotate(1080deg)" }}
      to={{ opacity: 1, transform: "translate(0, 0) rotate(0deg)" }}
      config={{ mass: 4 }}
    >
      {props => (
        <div style={props} className={styles.icon}>
          <FontAwesomeIcon icon={getNumberWord()} />
        </div>
      )}
    </Spring>
  );
}

export default DiceIcon;
