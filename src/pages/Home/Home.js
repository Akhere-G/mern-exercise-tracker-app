import React, { useState, useEffect } from "react";
import { Exercises } from "../../components/";
import * as actions from "../../actions";
const Home = () => {
  const [exercises, setExercises] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = process.env.REACT_APP_URL;

  const deleteExercise = id => {
    actions.deleteExercise(id);
    setExercises(prev => prev.filter(ExerciseId => ExerciseId._id !== id));
  };

  useEffect(() => {
    setLoading(true);
    setExercises(actions.getExercises());
    setLoading(false);
  }, [url]);

  if (!exercises || loading) {
    return (
      <section className='section'>
        <h2 className='title'>Logged Exercises</h2>
        <h2 className='title'>Loading...</h2>
      </section>
    );
  }

  if (exercises.length < 1) {
    return (
      <section className='section'>
        <h2 className='title'>Logged Exercises</h2>
        <h3 className='title'>No Exercises</h3>
      </section>
    );
  }

  return (
    <section className='section'>
      <h2 className='title'>Logged Exercises</h2>
      <Exercises exercises={exercises} deleteExercise={deleteExercise} />
    </section>
  );
};

export default Home;
