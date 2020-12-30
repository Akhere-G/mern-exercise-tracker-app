import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className='section'>
      <h2>Page not found</h2>
      <button className='btn Errorbtn'>
        <Link to='/'>Go to home</Link>
      </button>
    </section>
  );
};

export default Error;
