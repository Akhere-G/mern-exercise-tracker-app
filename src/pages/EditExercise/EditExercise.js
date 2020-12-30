import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Form } from "../../components";

const EditExercise = () => {
  const [loading, setLoading] = useState(false);
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
    axios
      .get(`${url}/exercises/${id}`)
      .then(res => {
        setExerciseData({ ...res.data, date: new Date(res.data.date) });
      })
      .catch(err => console.log(err));

    axios.get(`${url}/users/`).then(res => {
      if (res.data && res.data.length > 0) {
        setUsers(res.data.map(user => user.username));
      }
    });

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

    axios
      .post(`${url}/exercises/update/` + id, exercise)
      .then(res => {})
      .catch(err => console.log(err));
    window.location = "/";
  };

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
