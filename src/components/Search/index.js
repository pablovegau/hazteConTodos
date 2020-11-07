import React from "react"

import { Container } from "./styles"

export const Search = ({ handleOnChange }) => {
  return (
    <Container>
      <label htmlFor="searchInput">Search</label>
      <input id="searchInput" onChange={handleOnChange} />
    </Container>
  )
}
