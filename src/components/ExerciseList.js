import React, { useState, useEffect } from "react";
import axios from "axios";
import Exercise from "./Exercise";
import styles from "./ExerciseList.module.css";

const ExerciseList = () => {
  const [exercises, setExercises] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = process.env.REACT_APP_URL;

  const deleteExercise = id => {
    axios
      .delete(`${url}/exercises/` + id)
      .then(res => {
        console.log(res);
        setExercises(prev => prev.filter(ExerciseId => ExerciseId._id !== id));
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    setLoading(true);
    console.log("my website", url);
    axios
      .get(` ${url}/exercises`)
      .then(response => {
        console.log(response);
        setExercises(response.data);
      })
      .catch(err => console.log(err));
    setLoading(false);
  }, [url]);

  if (!exercises || loading) {
    return (
      <div>
        <h2 className={styles.title}>Logged Exercises</h2>
        <h2 className={styles.title}>Loading...</h2>
      </div>
    );
  }

  if (exercises.length < 1) {
    return (
      <div>
        <h2 className={styles.title}>Logged Exercises</h2>
        <h3 className={styles.title}>No Exercises</h3>
      </div>
    );
  }

  return (
    <>
      <h2 className={styles.title}>Logged Exercises</h2>
      <ul>
        {exercises.map(exercise => {
          const { _id } = exercise;
          return (
            <Exercise
              key={_id}
              id={_id}
              {...exercise}
              deleteExercise={deleteExercise}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ExerciseList;
