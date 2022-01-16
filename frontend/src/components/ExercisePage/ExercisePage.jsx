import React from "react";
import styles from "./ExercisePage.module.css";
import { useState, useEffect } from "react";
import { Webplayer } from "../Webplayer";
import PTChar from "../../images/PTChar.png";

const ExercisePage = ({ videoFeed, cnt, postureMsg }) => {
  const [borderColor, setBorderColor] = useState("green");

  // change it to false for production
  const [show, setShow] = useState(true);
  const [playSound, setPlaySound] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 5000);
    return () => {
      clearTimeout(timeId);
    };
  }, []);

  const MessagePopUp = () => {
    // reminder! replace with msg later
    return <div id={styles.alertMsg}>Great job! Keep going.</div>;
  };

  const endWorkout = () => {
    window.location.href = "/report";
  };

  return (
    <div
      className={styles.exercisePage}
      style={{ backgroundColor: borderColor, display: "flex" }}
    >
      <div>
        {show && MessagePopUp()}
        <img className={styles.icon} src={PTChar} />
      </div>

      <div style={{ flexGrow: "1", margin: "20px", backgroundColor: "white" }}>
        <Webplayer setBorderColor={setBorderColor} />
      </div>
      <button id={styles.endBtn} onClick={endWorkout}>
        End Workout
      </button>
    </div>
  );
};

export default ExercisePage;
