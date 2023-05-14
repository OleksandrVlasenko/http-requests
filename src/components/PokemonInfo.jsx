import React, { Component } from 'react';

export class PokemonInfo extends Component {
  state = {
    pokemon: null,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
        .then(res => res.json())
        .then(pokemon => this.setState({ pokemon }));
    }
  }
  render() {
    const { pokemon } = this.state;
    return (
      <div>
        {!pokemon && <p>Enter the pokemon name</p>}
        {pokemon && <p>name={pokemon.name}</p>}
      </div>
    );
  }
}
