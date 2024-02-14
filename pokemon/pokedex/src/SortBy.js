// SortBy.js
import React from 'react';

const SortBy = ({ onSelectSort }) => {
  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    onSelectSort(selectedSort);
  };

  return (
    <div className="ml-4">
      <label className="mr-2">Sort By:</label>
      <select onChange={handleSortChange}>
        <option value="index">Pokedex Number</option>
        <option value="name">Name</option>
        <option value="hp">HP</option>
        <option value="attack">Attack</option>
        <option value="defense">Defense</option>
      </select>
    </div>
  );
};

export default SortBy;
