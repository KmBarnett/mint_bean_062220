import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchForm from './SearchForm.js';

const searchUsers = jest.fn()
function renderSearchForm() {
  const utils = render(

      <SearchForm
        searchUsers = {searchUsers}
      />
 )
  return utils
}

describe('SearchForm', () => {

  it('Should Have its form', () => {
    const { getByPlaceholderText, getByText } = renderSearchForm()

    const searchField = getByPlaceholderText('User')
    const searchBtn = getByText('Search!')

    expect(searchField).toBeInTheDocument()
    expect(searchBtn).toBeInTheDocument()
  })

  it('should update user', () => {
  const { getByPlaceholderText, getByText } = renderSearchForm()

  const searchField = getByPlaceholderText('User')
  const searchBtn = getByText('Search!')

  fireEvent.change(searchField, { target: { value: 'AllanTur' } })
  fireEvent.click(searchBtn)

  expect(searchUsers).toHaveBeenCalled()
  expect(searchUsers).toHaveBeenCalledWith('AllanTur')

  })
})
