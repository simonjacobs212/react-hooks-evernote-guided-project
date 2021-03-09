import React from "react";

function Search({ handleChange, searchTerm }) {

  return (
    <div className="filter">
      <input id="search-bar" type="text" placeholder="Search Notes" value={searchTerm.string} onChange={handleChange} name="string"/>
      <select name="attribute" value={searchTerm.attribute} onChange={handleChange}>
        <option value="title">Title</option>
        <option value="body">Body</option>
      </select>
    </div>
  );
}

export default Search;
