import React, { useState, useEffect } from "react";
import axios from "axios";
import { Exercises } from "../../components/";

const Home = () => {
  const [exercises, setExercises] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = process.env.REACT_APP_URL;

  const deleteExercise = id => {
    axios
      .delete(`${url}/exercises/` + id)
      .then(res => {
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
