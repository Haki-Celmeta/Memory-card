import React, { useEffect, useState, key } from "react";
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
    <div className="pokemon" onClick={handleClick} key={key}>
      {fetchData && (
        <img src={fetchData.sprites.front_default} alt={pokemonId} style={{
          width: '200px',
        }} />
      )}
      <h4>{capitalize(pokemonId)}</h4>
    </div>
  )
}

export default Pokemon;