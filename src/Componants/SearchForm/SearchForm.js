import React, { useState } from 'react';

import './SearchForm.css';

function SearchForm({searchUsers}) {
  const [name, setName] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const validateInput = () => {
    if (!name) {
      return 'This Field Must Be Filled Out'
    } else if (/[^A-Za-z0-9]+$/g.test(name)) {
      return 'No Spaces or Special Characters Allowed'
    }
    console.log(/[^A-Za-z0-9]+$/g.test(name));

  }


  const handleClick = e => {
    e.preventDefault()
    if (validateInput()) {
      setErrorMsg(validateInput())
      console.log(validateInput());
      return
    }
    setErrorMsg('')
    searchUsers(name)
  }

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      handleClick(e)
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="SearchForm">
      <p>{errorMsg}</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => handleEnter(e)}
        type='text'
        placeholder='User'
      />
    <button type='button' onClick={(e) => handleClick(e)}>Search!</button>
    </form>
  );
}

export default SearchForm;
