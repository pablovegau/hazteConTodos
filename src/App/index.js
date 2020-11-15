import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { Pokemons } from "../pages/Pokemons"
import { PokemonDetail } from "../pages/PokemonDetail"
import { GlobalStyle } from "../styles/globalStyle"

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Pokemons />
          </Route>
          <Route path="/:pokemon">
            <PokemonDetail />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
