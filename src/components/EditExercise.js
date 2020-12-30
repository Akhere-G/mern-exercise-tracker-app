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

  useEffect(() => {
    axios.get(`${url}/users/`).then(res => {
      if (res.data && res.data.length > 0) {
        setUsers(res.data.map(user => user.username));
      }
    });

    axios
      .post(`${url}/exercises/` + id)
      .then(res => {
        setExerciseData({
          username: res.data.username,
          description: res.data.description,
          duration: res.data.duration,
          date: new Date(),
        });
      })
      .catch(err => console.log(err));
  }, [id, url]);

  return (
    <div className='section'>
      <h2>Edit Exercise Log</h2>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor=''>Username: </label>
          <select
            required
            className='form-control'
            value={exerciseData.username}
            onChange={onChangeUsername}
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
        <div className='form-group'>
          <label>Description: </label>
          <input
            type='text'
            required
            className='form-control'
            value={exerciseData.description}
            onChange={onChangeDescription}
          />
        </div>
        <div className='form-group'>
          <label>Duration: </label>
          <input
            type='text'
            required
            className='form-control'
            value={exerciseData.duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className='form-group'>
          <label>Date: </label>
          <div>
            <DatePicker selected={exerciseData.date} onChange={onChangeDate} />
          </div>
        </div>

        <div className='form-group'>
          <input
            type='submit'
            className='btn btn-primary w-100'
            value='Edit Exercise Log'
          />
        </div>
      </form>
    </div>
  );
};

export default EditExercise;
