import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "@material-ui/icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const links = [
    { name: "Exercises", slug: "/" },
    { name: "Create Exercises", slug: "/create" },
    { name: "Create Users", slug: "/user" },
  ];

  return (
    <header className={styles.container}>
      <nav className={styles.navbar}>
        <h1>
          <Link to='/' className={styles.logo}>
            Exercise Tracker
          </Link>
        </h1>

        <ul className={`${styles.navbarLinks} ${open ? styles.open : ""}`}>
          {links.map((link, index) => {
            const { name, slug } = link;
            const activeClass = pathname === slug ? styles.activeLink : "";
            return (
              <li className={`${styles.navbarLink} ${activeClass}`}>
                <Link
                  to={slug}
                  onClick={() => {
                    setOpen(prev => !prev);
                  }}
                >
                  {name}
                </Link>
              </li>
            );
          })}
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
    </header>
  );
};

export default Navbar;
