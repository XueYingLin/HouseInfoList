import React, { useState } from "react";

const SearchForm = props => {
  const onSearchChanged = event => {
    props.setSearchText(event.target.value);
  };

  return (
    <section className="search-form">
      <form>
        <input
          id="search"
          name="textfield"
          placeholder="Search"
          onChange={onSearchChanged}
          value={props.searchText}
        />
      </form>
    </section>
  );
};

export default SearchForm;
