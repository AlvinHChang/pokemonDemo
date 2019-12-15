
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    const { pokedexEntries } = this.props;
    this.state = {
      inputValue: '',
      filteredEntry: [],
      filteredEntriesQueue: [pokedexEntries],
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnKeyDown

  handleOnChange(event) {
    const newInputValue = event.target.value;
    const [filteredInputValue] = newInputValue.toLowerCase().split(' ');
    const { inputValue: curInputValue, filteredEntriesQueue } = this.state;

    if (filteredInputValue.length > curInputValue.length) {
      const filteredEntry = filteredEntriesQueue.filter(({ pokemon_species }) => {
        const { name } = pokemon_species;
        return name.toLowerCase().startsWith(filteredInputValue);
      });
      this.setState({
        inputValue,
        filteredEntry,
      });
    }
    else if (filteredInputValue.length < curInputValue.length) {

    }
  }

  render() {
    const { filteredEntry} = this.state;
    return (
      <div>
        <TextField onChange={this.handleOnChange} />
        {filteredEntry.map(({pokemon_species}) => <div>{pokemon_species.name}</div>)}
      </div>
    )
  }
}


function getPokemonSpriteUrl(pokedexNumber) {
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedexNumber}.png`;
}
