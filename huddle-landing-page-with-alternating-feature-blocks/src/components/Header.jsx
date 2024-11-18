import React from 'react';

const Header = ({ title, subtitle, description, cta }) => {
  return (
    <header>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{description}</p>
      <button>{cta}</button>
    </header>
  );
};

export default Header;