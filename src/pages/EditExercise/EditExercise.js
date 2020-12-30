import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as actions from "../../actions";

import { Form } from "../../components";

const EditExercise = () => {
  const [loading, setLoading] = useState(true);
  const [exerciseData, setExerciseData] = useState({
    username: "",
    description: "",
    duration: 0,
    date: null,
  });

  const [users, setUsers] = useState([]);
  const { id } = useParams();

  const url = process.env.REACT_APP_URL;

  useEffect(() => {
    setLoading(true);
    const data = actions.getExercise(id);
    setExerciseData({ ...data, date: new Date(data.date) });

    const users = actions.getUsers();
    if (users && users > 0) {
      setUsers(users.map(user => user.username));
    }

    setLoading(false);
  }, [url, id]);

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
    actions.updateExercise(id, exercise);
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
    buttonText: "Edit Exercise",
  };
  return (
    <section className='section'>
      <h2>Edit Exercise Log</h2>
      <Form {...formProps} />
    </section>
  );
};

export default EditExercise;
