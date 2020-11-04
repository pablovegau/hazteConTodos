import React from "react"
import { GlobalStyle } from "../styles/globalStyle"

import { Pokemon } from "../pages/Pokemon"

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Pokemon />
    </>
  )
}
