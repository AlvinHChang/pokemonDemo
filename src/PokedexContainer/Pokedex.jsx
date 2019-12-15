import React, { Component } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchBar from '../SearchBar/SearchBar';

export default class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedexEntries: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const fullPokedexUrl = 'https://pokeapi.co/api/v2/pokedex/1';
    axios.get(fullPokedexUrl).then(({ data }) => {
      const { pokemon_entries } = data;
      // eslint-disable-next-line camelcase
      const pokedexEntries = pokemon_entries.map(({ entry_number, pokemon_species }) => ({ entryNumber: entry_number, pokemonSpecies: pokemon_species.name }));
      this.setState({
        pokedexEntries,
        isLoading: false,
      });
    });
  }

  render() {
    const { pokedexEntries, isLoading } = this.state;
    return (
      <div>
        {isLoading ? <CircularProgress /> : <SearchBar pokedexEntries={pokedexEntries} />}
      </div>
    );
  }
}
