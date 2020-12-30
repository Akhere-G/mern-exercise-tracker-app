import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    window.location = "/";
  };

  return (
    <section className='section'>
      <h2>Edit Exercise Log</h2>
      <form className='form' onSubmit={onSubmit}>
        <div className='formGroup'>
          <label htmlFor='usernameInput'>Username: </label>
          <select
            required
            value={exerciseData.username}
            onChange={onChangeUsername}
            className='input'
            id='usernameInput'
          >
            {users.map(user => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className='formGroup'>
          <label htmlFor='descInput'>Description: </label>
          <input
            type='text'
            required
            value={exerciseData.description}
            onChange={onChangeDescription}
            id='descInput'
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='durationInput'>Duration: </label>
          <input
            type='text'
            required
            value={exerciseData.duration}
            onChange={onChangeDuration}
            id='durationInput'
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='dateInput'>Date: </label>
          <div className='dateInput input'>
            <DatePicker
              selected={exerciseData.date}
              onChange={onChangeDate}
              id='dateInput'
            />
          </div>
        </div>

        <div className='formBtnGroup'>
          <button className='btn' type='submit'>
            Create Exercise Log
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditExercise;
