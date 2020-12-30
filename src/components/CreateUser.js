import React, { useState } from "react";
import axios from "axios";
import styles from "./CreateUser.module.css";
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
      .then(res => console.log(res.data))
      .catch(e => console.log(e));
    window.location = "/";
  };

  return (
    <div className='section'>
      <h2>Create New User</h2>
      <form className='form' onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <label>Username: </label>
          <input
            type='text'
            required
            value={username}
            placeholder='Enter new username'
            onChange={onChangeUsername}
          />
        </div>

        <div className={styles.formBtnGroup}>
          <button type='submit' className='btn'>
            Create Exercise Log
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
