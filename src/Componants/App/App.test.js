import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

function renderSearchForm() {
  const utils = render(
      <App />
 )
  return utils
}

describe('App', () => {
  it('Renders App', () => {
    const { getByText } = renderSearchForm()

    const title = getByText('GitSearch')

    expect(title).toBeInTheDocument()
  })
})
