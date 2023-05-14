import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { PokemonForm } from './PokemonForm';
import { PokemonInfo } from './PokemonInfo';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    pokemon: null,
    loading: false,
    pokemonName: '',
  };
  componentDidMount() {
    // this.setState({ loading: true });
    // fetch(`https://pokeapi.co/api/v2/pokemon/kakuna`)
    //   .then(res => res.json())
    //   .then(pokemon => this.setState({ pokemon }))
    //   .finally(this.setState({ loading: false }));
  }

  handleSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    const { loading, pokemonName } = this.state;
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={this.handleSubmit} />
        <PokemonInfo pokemonName={pokemonName} />
        {loading && <p>Loading...</p>}
        
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
