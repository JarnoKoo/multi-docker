import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Olen toinen sivu
      <Link to="/">Takaisin etusivulle</Link>
    </div>
  );
};
