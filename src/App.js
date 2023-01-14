import React, { useState } from "react";
import "./App.css";
import AnimalShow from "./AnimalShow";

const getRandomAnimal = () => {
  const animals = ["bird", "cow", "cat", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
};

const App = () => {
  const [animals, SetAnimals] = useState([]);

  const clickHandler = () => {
    SetAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow key={index} type={animal} />;
  });
  console.log(animals);
  return (
    <>
      <div className="app">
        <button onClick={clickHandler}>Add animal</button>
        <div className="animal-list">{renderedAnimals}</div>
      </div>
    </>
  );
};
export default App;
