import axios from "axios";
import React, { useState, useEffect } from "react";

const usePokemonList = (pokemonUrl) => {
  const [pokemonDetail, setPokemonDetail] = useState({});
  useEffect(() => {
    (async (pokemonUrl) => {
      const result = await axios.get(pokemonUrl);
      setPokemonDetail(result.data);
    })(pokemonUrl);
  }, [pokemonUrl]);

  return pokemonDetail;
};

const PokemonDetail = ({ url }) => {
  let pokemonDetail = { abilities: [], forms: [] };
  pokemonDetail = usePokemonList(url);
  if (pokemonDetail.abilities) {
    const habilidades = pokemonDetail.abilities.map((ability) => {
      console.log(ability);
      return (
        <div>
          <div>Ability</div>
          <div>{ability.name}</div>
        </div>
      );
    });
    const forms = pokemonDetail.forms.map((form) => {
      return (
        <div>
          <div>Form</div>
          <div>{form.name}</div>
        </div>
      );
    });

    return (
      <div>
        {pokemonDetail.name}
        {forms}
        {habilidades}
      </div>
    );
  }
  return <div>LOADING</div>;
};

export default PokemonDetail;
