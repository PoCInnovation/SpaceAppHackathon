import React from 'react';
import { Link } from 'react-router-dom';

const Home = (): JSX.Element => (
  <div>
    <p>Hello Space App</p>
    <Link to="/contact">
      <button type="button">
        <span>Login</span>
      </button>
    </Link>
  </div>
);

export default Home;
