import React from "react";
import { Link } from "react-router-dom";
const Exercise = ({
  id,
  deleteExercise,
  username,
  description,
  duration,
  date,
}) => {
  const regexp = /-/g;
  return (
    <tr className='bg-dark text-light'>
      <td> {username} </td>
      <td> {description} </td>
      <td> {duration} </td>
      <td> {date.substring(0, 10).replace(regexp, " ")} </td>
      <td>
        <button className='btn text-primary'>
          <Link
            to={`/edit/${id}`}
            onClick={() => {
              console.log(`/edit/${id}`);
            }}
          >
            Edit
          </Link>
        </button>
        |
        <button
          className='btn text-danger'
          onClick={() => {
            deleteExercise(id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Exercise;
