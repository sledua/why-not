import React from 'react';

const Features = ({ features }) => {
  return (
    <section>
      <h2>Features</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Features;