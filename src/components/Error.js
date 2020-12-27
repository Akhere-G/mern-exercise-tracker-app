import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <button className='btn btn-primary'>
        <Link to='/' className='text-light'>
          Go to home
        </Link>
      </button>
    </div>
  );
};

export default Error;
