// SortBy.js
import React from 'react';

const SortBy = ({ onSelectSort }) => {
  const handleSortChange = (e) => {
    onSelectSort(e.target.value);
  };

  return (
    <div className="ml-4">
      <label htmlFor="sort">Sort By:</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="index">Index</option>
        <option value="name">Name</option>
        <option value="hp">HP</option>
        <option value="attack">Attack</option>
        <option value="defense">Defense</option>
      </select>
    </div>
  );
};

export default SortBy;
