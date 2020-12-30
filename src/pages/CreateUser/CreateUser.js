import React, { useState } from "react";
import axios from "axios";
const CreateUser = () => {
  const [username, setUsername] = useState("");
  const url = process.env.REACT_APP_URL;

  const onChangeUsername = e => {
    setUsername(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const user = { username };

    axios
      .post(`${url}/users/add`, user)
      .then(res => {})
      .catch(e => console.log(e));
    window.location = "/";
  };

  return (
    <section className='section'>
      <h2>Create New User</h2>
      <form className='form' onSubmit={onSubmit}>
        <div className='formGroup'>
          <label>Username: </label>
          <input
            type='text'
            required
            value={username}
            placeholder='Enter new username'
            onChange={onChangeUsername}
          />
        </div>

        <div className='formBtnGroup'>
          <button type='submit' className='btn'>
            Create User
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateUser;
