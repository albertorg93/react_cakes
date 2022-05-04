import React, {useState, useEffect} from "react";
import useFetch from "../../../hooks/useFetch";
import { BallTriangle } from  'react-loader-spinner'

const Tasters = () => {

  const {loading, result} = useFetch('https://pokeapi.co/api/v2/pokemon')
   const pokemons = result.results
  return (
    <div className="spinner">
      <p>{loading?<BallTriangle color="#00BFFF" height={80} width={80} />:JSON.stringify(pokemons)}</p>
    </div>
      
  );
};

export default Tasters;
