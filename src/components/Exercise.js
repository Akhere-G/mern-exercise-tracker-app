import React from "react";
import { Link } from "react-router-dom";
import styles from "./Exercise.module.css";

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
    <tr className={styles.exercise}>
      <td> {username} </td>
      <td> {description} </td>
      <td> {duration} </td>
      <td> {date.substring(0, 10).replace(regexp, " ")} </td>
      <td>
        <button className={styles.editBtn}>
          <Link
            to={`/edit/${id}`}
            onClick={() => {
              console.log(`/edit/${id}`);
            }}
          >
            Edit
          </Link>
        </button>

        <button
          className={styles.deleteBtn}
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
