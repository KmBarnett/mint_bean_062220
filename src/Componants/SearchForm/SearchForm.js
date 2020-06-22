import React, { useState } from 'react';

import './SearchForm.css';

function SearchForm({searchUsers}) {
  const [name, setName] = useState('')

  const handleClick = e => {
    e.preventDefault()
    searchUsers(name)
  }
  return (
    <form className="SearchForm">
      <h3 className="SearchForm-header">Stalk!</h3>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type='text'
      />
    <button type='button' onClick={(e) => handleClick(e)}></button>
    </form>
  );
}

export default SearchForm;
