import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Exercise from "./Exercise";
const ExerciseList = () => {
  const [exercises, setExercises] = useState(null);
  const [loading, setLoading] = useState(true);

  const deleteExercise = id => {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then(res => {
        console.log(res);
        setExercises(prev => prev.filter(ExerciseId => ExerciseId._id !== id));
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/exercises/")
      .then(response => {
        setExercises(response.data);
      })
      .catch(err => console.log(err));
    setLoading(false);
  }, []);

  if (!exercises || loading) {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <h3>Loading...</h3>
      </div>
    );
  }

  if (exercises.length < 1) {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <h3>No Exercises</h3>
      </div>
    );
  }

  return (
    <div>
      <h3 className='mb-4'>Logged Exercises</h3>
      <table className='table mb-4'>
        <thead className='thead-light'>
          <tr>
            <th>username</th>
            <th>description</th>
            <th>duration</th>
            <th>date</th>
            <th>options</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
};

export default ExerciseList;
