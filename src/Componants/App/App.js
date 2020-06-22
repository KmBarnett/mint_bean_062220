import React, {useState} from 'react';
import SearchForm from './../SearchForm/SearchForm.js'
import './App.css';

function App() {
  const [results, setResults] = useState({})

  const searchUsers = async query => {
    const res = await fetch(`https://api.github.com/users/${query}`)
    const data = await res.json()
    setResults(data)
    console.log(results);
  }

  return (
    <main className="App">
        <h1 className="App-header">GitStalk</h1>
        <SearchForm searchUsers={searchUsers} />
    </main>
  );
}

export default App;
