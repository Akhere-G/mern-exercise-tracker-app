import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = ({
  exerciseData,
  onChangeUsername,
  onChangeDescription,
  onChangeDuration,
  onChangeDate,
  users,
  onSubmit,
  buttonText,
}) => {
  return (
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
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default Form;
