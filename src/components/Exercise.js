import React, { useState } from "react";
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
  const [show, setShow] = useState(false);

  const regexp = /-/g;
  return (
    <li className={`${styles.exercise} ${show ? styles.deleted : ""} `}>
      <p> {username} </p>
      <p> {description} </p>
      <p> {duration} </p>
      <p> {date.substring(0, 10).replace(regexp, " ")} </p>
      <p>
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
            setShow(true);
            setTimeout(() => {
              deleteExercise(id);
            }, 350);
          }}
        >
          Delete
        </button>
      </p>
    </li>
  );
};

export default Exercise;
