import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const CreateExercise = () => {
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
    console.log(exercise);
    window.location = "/";
  };

  useEffect(() => {
    setUsers(["test user1", "test user2"]);
    setUsername("test username");
  }, []);

  return (
    <div>
      <h3>Create New Exercise Log</h3>
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
            value='Create Exercise Log'
          />
        </div>
      </form>
    </div>
  );
};

export default CreateExercise;
