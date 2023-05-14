import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from "react-toastify";

const styles = { form: { marginBottom: 20 } };

export class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = event => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { pokemonName } = this.state;

    if (pokemonName === "") {
      toast.error("Enter the name of pokemon")
      return;
    }

    this.props.onSubmit(pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Search
        </button>
      </form>
    );
  }
}
