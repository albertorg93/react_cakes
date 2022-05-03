import React, {useState, useEffect} from "react";
import useFetch from "../../../hooks/useFetch";

const Tasters = () => {

  const {loading, result} = useFetch('https://pokeapi.co/api/v2/pokemon')
   const pokemons = result.results
  return (
      <p>{loading?"Carganding!":JSON.stringify(pokemons)}</p>
  );
};

export default Tasters;
