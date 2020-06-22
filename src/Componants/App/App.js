import React, { useState, useEffect } from 'react';
import SearchForm from './../SearchForm/SearchForm.js'
import SearchDisplay from './../SearchDisplay/SearchDisplay.js'
import './App.css';

function App() {
  const [results, setResults] = useState({})
  const [repos, setRepos] = useState([])
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

  const fetchRepos = async url => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setRepos(await data)
    } catch (e) {
      console.log(e.status);
    }
  }

  useEffect(() => {
    if (results.repos_url) {
      fetchRepos(results.repos_url)
    }
    console.log(results.repos_url);
  }, [results])

  useEffect(() => {
    console.log(repos);
  }, [repos])



  return (
    <main className="App">
        <h1 className="App-header">GitSearch</h1>
        <SearchForm searchUsers={searchUsers} />
        {results.login && <SearchDisplay user={results} repos={repos}/>}
        {results.message && notFound()}
    </main>
  );
}

export default App;
