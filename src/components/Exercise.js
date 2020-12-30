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
      <header className={styles.header}>
        <h2> {username} </h2>
        <p> {date.substring(0, 10).replace(regexp, " ")} </p>
      </header>
      <div className={styles.body}>
        <h4 className={styles.desc}> {description} </h4>
        <h5> {`Duration: ${duration} mins`} </h5>
        <footer className={styles.footer}>
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
        </footer>
      </div>
    </li>
  );
};

export default Exercise;
