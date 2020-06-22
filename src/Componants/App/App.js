import React, { useState, useEffect } from 'react';
import SearchForm from './../SearchForm/SearchForm.js'
import SearchDisplay from './../SearchDisplay/SearchDisplay.js'
import './App.css';

function App() {
  const [results, setResults] = useState({})
  const [notFoundMessage, setNotFoundMessage] = useState('')


  const searchUsers = async query => {
    try {
      const res = await fetch(`https://api.github.com/users/${query}`)
      const data = await res.json()
      setResults( await data)
      setNotFoundMessage(`User ${query} Not Found`)
    } catch (e) {
      console.log(e.status);
    }

  }

  const notFound = () => {
    return (
      <section>
        <h2>{notFoundMessage}</h2>
      </section>
    )
  }

  useEffect(() => {
    console.log(results);
    console.log(notFoundMessage);
  }, [results, notFoundMessage])



  return (
    <main className="App">
        <h1 className="App-header">GitSearch</h1>
        <SearchForm searchUsers={searchUsers} />
        {results.login && <SearchDisplay user={results}/>}
        {results.message && notFound()}
    </main>
  );
}

export default App;
