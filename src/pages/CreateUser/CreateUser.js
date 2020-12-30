import React, { useState } from "react";
import * as actions from "../../actions";

const CreateUser = () => {
  const [username, setUsername] = useState("");

  const onChangeUsername = e => {
    setUsername(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const user = { username };

    await actions.addUser(user);
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
