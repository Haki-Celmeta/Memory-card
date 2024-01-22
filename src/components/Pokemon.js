import React, { useEffect, useState } from "react";
import '../App.css';

const Pokemon = ({ pokemonId, onClick }) => {
  const [fetchData, setFetchData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFetchData(data);
      })
  }, [pokemonId]);

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleClick() {
    onClick(pokemonId);
  }

  return (
    <div className="pokemon" onClick={handleClick}>
      {fetchData && (
        <img src={fetchData.sprites.front_default} alt={pokemonId} />
      )}
      <h4>{capitalize(pokemonId)}</h4>
    </div>
  )
}

export default Pokemon;