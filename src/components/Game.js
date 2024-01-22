import React, { useState } from "react";
import Pokemon from "./Pokemon";
import pokemons from "./pokemonData";

const Game = () => {
  const [array, setArray] = useState(newPokemonArray());
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedPokemon, setClickedPokemon] = useState([]);

  function randomIndex() {
    return Math.floor(Math.random() * pokemons.length);
  }

  function randomPokemon() {
    const randomNum = randomIndex();
    return pokemons[randomNum];
  }

  function newPokemonArray() {
    let array = [];
    while (array.length < 21) {
      const rand = randomPokemon();
      if (array.includes(rand)) {
        continue;
      }
      array.push(rand);
    }

    return array;
  }

  function handleClick(pokemonId) {
    if (!clickedPokemon.includes(pokemonId)) {
      setClickedPokemon([...clickedPokemon, pokemonId]);
      setCurrentScore(() => currentScore + 1);
    } else {
      if (bestScore < currentScore) {
        setBestScore(currentScore);
      }
      setClickedPokemon([]);
      setCurrentScore(0);
    }
    setArray(() => newPokemonArray());
  }

  return (
    <>
      <div className="score-container">
        <div className="titles">
          <h1>Memory Card</h1>
          <h2>Choose a card at least once</h2>
        </div>
        <div className="score">
          <h3>Score now: {currentScore}</h3>
          <h3>Best Score: {bestScore}</h3>
        </div>
      </div>

      <div className="pokemon-container">
        {array.map(pokemon => (
          <Pokemon key={pokemon} pokemonId={pokemon} onClick={handleClick} />
        ))}
      </div>
    </>
  )
}

export default Game;