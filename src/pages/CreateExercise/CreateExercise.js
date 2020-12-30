import React, { useState, useEffect } from "react";
import * as actions from "../../actions";

import { Form } from "../../components";

const CreateExercise = () => {
  const [users, setUsers] = useState([]);
  const [exerciseData, setExerciseData] = useState({
    username: "",
    description: "",
    duration: 0,
    date: null,
  });

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

  const onSubmit = e => {
    e.preventDefault();

    const exercise = { ...exerciseData };
    actions.addExercise(exercise);
    window.location = "/";
  };

  useEffect(() => {
    const users = actions.getUsers();
    if (users && users.length > 0) {
      setUsers(users.map(user => user.username));
      setExerciseData(prev => ({
        ...prev,
        username: users[0].username,
      }));
    }
  }, []);

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
      <h2>Create New Exercise Log</h2>
      <Form {...formProps} />
    </section>
  );
};

export default CreateExercise;
