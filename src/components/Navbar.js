import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { Menu } from "@material-ui/icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link to='/' className={styles.logo}>
        Exercise Tracker
      </Link>

      <ul className={`${styles.navbarLinks} ${open ? styles.open : ""}`}>
        <li className={styles.navbarLink}>
          <Link to='/'>Exercises</Link>
        </li>
        <li className={styles.navbarLink}>
          <Link to='/create'>Create Exercises Log</Link>
        </li>
        <li className={styles.navbarLink}>
          <Link to='/user'>Create User</Link>
        </li>
      </ul>
      <button
        className={styles.navbarBtn}
        onClick={() => {
          setOpen(prev => !prev);
        }}
      >
        <Menu />
      </button>
    </nav>
  );
};

export default Navbar;
