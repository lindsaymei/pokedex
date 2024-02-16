// SortBy.js
import React from 'react';

const SortBy = ({ onSelectSort }) => {
  const sortByOptions = [
    { label: 'Pokedex Number', value: 'index' },
    { label: 'Name', value: 'name' },
    { label: 'Normal', value: 'normal' },
    { label: 'Fire', value: 'fire' },
    { label: 'Water', value: 'water' },
    { label: 'Grass', value: 'grass' },
    { label: 'Electric', value: 'electric' },
    { label: 'Ice', value: 'ice' },
    { label: 'Fighting', value: 'fighting' },
    { label: 'Poison', value: 'poison' },
    { label: 'Ground', value: 'ground' },
    { label: 'Flying', value: 'flying' },
    { label: 'Psychic', value: 'psychic' },
    { label: 'Bug', value: 'bug' },
    { label: 'Rock', value: 'rock' },
    { label: 'Ghost', value: 'ghost' },
    { label: 'Dark', value: 'dark' },
    { label: 'Dragon', value: 'dragon' },
    { label: 'Steel', value: 'steel' },
    { label: 'Fairy', value: 'fairy' },
  ];

  return (
    <div className="ml-4">
      <label htmlFor="sortBy">Sort By:</label>
      <select
        id="sortBy"
        onChange={(e) => onSelectSort(e.target.value)}
        className="ml-2 p-2 border-blue-500 border-2"
      >
        {sortByOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortBy;
