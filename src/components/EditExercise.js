import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const EditExercise = () => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  const url = process.env.REACT_APP_URL;

  const onChangeUsername = e => {
    setUsername(e.target.value);
  };
  const onChangeDescription = e => {
    setDescription(e.target.value);
  };

  const onChangeDuration = e => {
    setDuration(e.target.value);
  };
  const onChangeDate = date => {
    setDate(date);
  };
  const onSubmit = e => {
    e.preventDefault();
    const exercise = { username, description, duration, date, users };

    axios
      .post(`${url}/exercises/update/` + id, exercise)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    window.location = "/";
  };

  useEffect(() => {
    axios
      .post(`${url}/exercises/` + id)
      .then(res => {
        setUsername(res.data.username);
        setDescription(res.data.Description);
        setDuration(res.data.Duration);
        setDate(new Date(res.data.Date));
      })
      .catch(err => console.log(err));

    axios.get(`${url}/users/`).then(response => {
      if (response.data && response.data.length > 0) {
        setUsers(response.data.map(user => user.username));
        setUsername(response.data[0].username);
      }
    });
  }, [id]);

  return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor=''>Username: </label>
          <select
            required
            className='form-control'
            value={username}
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
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className='form-group'>
          <label>Duration: </label>
          <input
            type='text'
            required
            className='form-control'
            value={duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className='form-group'>
          <label>Date: </label>
          <div>
            <DatePicker selected={date} onChange={onChangeDate} />
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
