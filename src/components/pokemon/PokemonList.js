import { useEffect, useState } from "react";
import PokemonApi from "../../api/PokemonApi";
import "./Pokemon.css";
import React from "react";

const usePokemonList = (offset) => {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    (async (offset) => {
      const result = await PokemonApi(`?offset=${offset}&limit=20`);
      setPokemonList(result.data.results);
    })(offset);
  }, [offset]);

  return pokemonList;
};

const PokemonList = ({ offset, setShowHome, setShowDetail, setUrl }) => {
  console.log(offset);
  const pokemonList = usePokemonList(offset);
  const list = pokemonList.map((element) => {
    return (
      <div class="row">
        <div class="col">{element.name}</div>
        <div
          class="col"
          onClick={() => {
            setUrl(element.url);
            setShowDetail(true);
            setShowHome(false);
          }}
        >
          {element.url}
        </div>
      </div>
    );
  });

  return (
    <div>
      <header>
        <div class="col">Name</div>
        <div class="col">Url</div>
      </header>
      {list}
    </div>
  );
};

export default PokemonList;
