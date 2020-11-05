import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"

import { GlobalStyle } from "../styles/globalStyle"

import { Pokemon } from "../pages/Pokemon"
import { PokemonDetail } from "../pages/PokemonDetail"

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/pokemon" />
          </Route>
          <Route exact path="/pokemon">
            <Pokemon />
          </Route>
          <Route path="/pokemon/:pokemon">
            <PokemonDetail />
          </Route>
          <Route path="*">
            <Redirect to="/pokemon" />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
