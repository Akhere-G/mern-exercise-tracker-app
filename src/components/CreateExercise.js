import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateExercise = () => {
  const url = process.env.REACT_APP_URL;
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

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
      .post(`${url}/exercises/add/`, exercise)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    window.location = "/";
  };

  useEffect(() => {
    axios.get(`${url}/users/`).then(response => {
      if (response.data && response.data.length > 0) {
        setUsers(response.data.map(user => user.username));
        setUsername(response.data[0].username);
      }
    });
  }, [url]);

  return (
    <section className='section'>
      <h2>Create New Exercise Log</h2>
      <form className='form' onSubmit={onSubmit}>
        <div className='formGroup'>
          <label htmlFor='usernameInput'>Username: </label>
          <select
            required
            value={username}
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
            value={description}
            onChange={onChangeDescription}
            id='descInput'
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='durationInput'>Duration: </label>
          <input
            type='text'
            required
            value={duration}
            onChange={onChangeDuration}
            id='durationInput'
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='dateInput'>Date: </label>
          <div className='dateInput input'>
            <DatePicker
              selected={date}
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

export default CreateExercise;
