import React from "react";
import Exercise from "./Exercise/Exercise";
const Exercises = ({ exercises, deleteExercise }) => {
  return (
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
  );
};

export default Exercises;
