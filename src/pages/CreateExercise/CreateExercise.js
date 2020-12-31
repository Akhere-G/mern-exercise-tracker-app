import React, { useState, useEffect } from "react";
import * as actions from "../../actions";

import { Form } from "../../components";

const CreateExercise = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [exerciseData, setExerciseData] = useState({
    username: "",
    description: "",
    duration: 0,
    date: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const users = await actions.getUsers();
      if (users && users.length > 0) {
        setUsers(users.map(user => user.username));
        setExerciseData(prev => ({
          ...prev,
          username: users[0].username,
        }));
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const onChangeUsername = e => {
    setExerciseData(prev => ({ ...prev, username: e.target.value }));
  };
  const onChangeDescription = e => {
    setExerciseData(prev => ({ ...prev, description: e.target.value }));
  };

  const onChangeDuration = e => {
    setExerciseData(prev => ({ ...prev, duration: e.target.value }));
  };
  const onChangeDate = date => {
    setExerciseData(prev => ({ ...prev, date }));
  };

  const onSubmit = async e => {
    e.preventDefault();

    const exercise = { ...exerciseData };
    await actions.addExercise(exercise);
    window.location = "/";
  };

  if (loading) {
    return (
      <section className='section'>
        <h2 className='title'>Logged Exercises</h2>
        <h2 className='title'>Loading...</h2>
      </section>
    );
  }
  const formProps = {
    exerciseData,
    onChangeUsername,
    onChangeDescription,
    onChangeDuration,
    onChangeDate,
    users,
    onSubmit,
    buttonText: "Create Exercise",
  };

  return (
    <section className='section'>
      <h2>Create New Exercise</h2>
      <Form {...formProps} />
    </section>
  );
};

export default CreateExercise;
