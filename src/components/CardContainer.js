import React from "react";

const Card = ({ title, description, link }) => (
  <div className="card">
    <a href={link}>
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  </div>
);

const CardContainer = () => {
  return (
    <div className="card-container">
      <Card
        title="Front-end Developers"
        description="Access the documentation, best practices, and guides for building the front-end."
        link="/fronts/intro"
      />
      <Card
        title="Back-end Developers"
        description="Discover back-end APIs, services, and integration strategies."
        link="/backends/intro"
      />
    </div>
  );
};

export default CardContainer;
