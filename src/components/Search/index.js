import React from "react"
import { Container } from "./styles"

export const Search = ({ handleOnChange }) => {
  const handleOnInputChange = (event) => {
    const keyword = event.target.value
    handleOnChange(keyword)
  }

  return (
    <Container>
      <label htmlFor="searchInput">Search</label>
      <input id="searchInput" onChange={handleOnInputChange} />
    </Container>
  )
}
