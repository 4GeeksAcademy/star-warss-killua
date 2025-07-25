
import React, { useEffect, useState, useContext } from "react";
import Card from "../components/Card";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);

 useEffect(() => {
  fetch("https://swapi.py4e.com/api/people/")
    .then((res) => res.json())
    .then((data) => setCharacters(data.results));

  fetch("https://swapi.py4e.com/api/planets/")
    .then((res) => res.json())
    .then((data) => setPlanets(data.results));
}, []);


  return (
    <div className="container mt-4">
      <h2 className="text-light">Characters</h2>
      <div className="d-flex overflow-auto">
        {characters.map((char, i) => (
          <Card key={i} item={char} type="people" index={i} />
        ))}
      </div>

      <h2 className="text-light mt-5">Planets</h2>
      <div className="d-flex overflow-auto">
        {planets.map((planet, i) => (
          <Card key={i} item={planet} type="planets" index={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;
