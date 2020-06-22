import React from 'react';

import './SearchDisplay.css';

function SearchDisplay({user}) {
  return (
    <article className="SearchDisplay">
      <header className='SearchDisplay-header'>
        <img src={user.avatar_url} alt='User Avatar' />
        <h2>{user.login}</h2>
        <section>
          <p>Homepage: {user.html_url}</p>
          {user.email ? <p>Email: {user.email}</p> : <p>Email: N/A</p>}
          {user.hireable ? <p>Hireable: Yes</p> : <p>Hireable: No</p>}
        </section>
      </header>

    </article>
  );
}

export default SearchDisplay;
