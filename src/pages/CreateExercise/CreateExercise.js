import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "../../components";

const CreateExercise = () => {
  const url = process.env.REACT_APP_URL;
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

    axios
      .post(`${url}/exercises/add/`, exercise)
      .then(res => {})
      .catch(err => console.log(err));
    window.location = "/";
  };

  useEffect(() => {
    axios.get(`${url}/users/`).then(response => {
      if (response.data && response.data.length > 0) {
        setUsers(response.data.map(user => user.username));
        setExerciseData(prev => ({
          ...prev,
          username: response.data[0].username,
        }));
      }
    });
  }, [url]);

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
