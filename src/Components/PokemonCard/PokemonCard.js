import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = ({ pokemon, setPokemon }) => {
  const { color, image, name, type, weight } = pokemon;

    const evoluirPokemon = () => {
      if (name === "Pichu") {
        const evolucao = {
          ...pokemon,
          name: "Pikachu",
          evolved: true,
          weight: 5,
          image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"

        };
        setPokemon(evolucao);

      }
        
      if (name === "Psyduck") {
        const evolucao = {
          ...pokemon,
          name: "Golduck",
          evolved: true,
          weight: 76,
          image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/055.png"

        };
        setPokemon(evolucao);
    }
    if (name === "Pikachu") {
      const evolucao = {
        ...pokemon,
        name: "Raichu",
        evolved: true,
        weight: 30,
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png"

      };
      setPokemon(evolucao);
    }
  } 
  return (
    <Card color={color}>
        <img src={image} alt={`Pokemon`}/>
        <PokemonName>{name}</PokemonName>
        <PokemonType>{type}</PokemonType>
        <p>{weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard;