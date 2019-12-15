import React, { Component } from 'react';
import './SearchBar.css';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    const { pokedexEntries } = this.props;
    this.state = {
      filteredInputValue: '',
      filteredEntry: pokedexEntries || [],
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  static getPokemonSpriteUrl(pokedexNumber) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedexNumber}.png`;
  }

  handleOnChange(event) {
    const [filteredInputValue] = event.target.value.toLowerCase().split(' ');
    const { filteredEntry: prevFilteredEntry, filteredInputValue: prevFilteredInputValue } = this.state;
    const { pokedexEntries } = this.props;
    let filteredEntry = [];
    if (filteredInputValue.length > prevFilteredInputValue.length
      && filteredInputValue.startsWith(prevFilteredInputValue)) {
      filteredEntry = prevFilteredEntry.filter(({ pokemon_species }) => {
        const { name } = pokemon_species;
        return name.startsWith(filteredInputValue);
      });
    } else {
      filteredEntry = pokedexEntries.filter(({ pokemon_species }) => {
        const { name } = pokemon_species;
        return name.startsWith(filteredInputValue);
      });
    }
    this.setState({
      filteredInputValue,
      filteredEntry,
    });
  }


  render() {
    let { filteredEntry } = this.state;
    filteredEntry = filteredEntry.slice(0, 8) || [];
    return (
      <List>
        <TextField onChange={this.handleOnChange} />
        {filteredEntry.map(({ entry_number, pokemon_species }) => (
          <ListItem key={entry_number} button>
            <ListItemAvatar>
              <Avatar src={SearchBar.getPokemonSpriteUrl(entry_number)} />
            </ListItemAvatar>
            <ListItemText primary={pokemon_species.name} />
          </ListItem>
        ))}
      </List>
    );
  }
}
