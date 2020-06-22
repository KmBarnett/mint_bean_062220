import React from 'react';
import moment from 'moment';

import './SearchDisplay.css';

function SearchDisplay({user, repos}) {
  const creatLinks = () => {
    const copyRepos = [...repos]

    copyRepos.sort((a,b) => {
      return moment().diff(a.updated_at, 'days') < moment().diff(b.updated_at, 'days') ? -1 : 1
    })
    return copyRepos.slice(0,20).map(repo => {
      return (
      <a className='repo-link' key={repo.id} href={repo.html_url} target="_blank">
        <button data-tooltip='Click Here to See Project'>
          {repo.name}
        </button>
      </a>)
    })
  }

  return (
    <article className="SearchDisplay">
      <header className='SearchDisplay-header'>
        <img src={user.avatar_url} alt='User Avatar' />
        <h2>{user.login}</h2>
        <section>
          <p>Home Page:
            <a className='user-url' href={user.html_url} target="_blank">
              {user.html_url}
            </a>
          </p>
          {user.email ? <p>Email: {user.email}</p> : <p>Email: N/A</p>}
          {user.hireable ? <p>Hireable: Yes</p> : <p>Hireable: No</p>}
        </section>
      </header>
      <section className='repos'>
        <h3>Most Recent Repos:</h3>
        <section className='repo-links'>
          {creatLinks()}
        </section>
      </section>
    </article>
  );
}

export default SearchDisplay;
