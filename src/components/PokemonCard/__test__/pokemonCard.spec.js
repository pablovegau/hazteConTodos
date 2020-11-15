import React from "react"
import { render, screen } from "@testing-library/react"

import { BrowserRouter as Router } from "react-router-dom"

import { PokemonCard } from "../"

const charizard = {
  name: "charizard",
  id: "6",
  types: ["fire", "flying"],
  height: "17",
  habilities: ["blaze", "solar-power"],
}

test("Render PokemonCard component by default", () => {
  render(
    <Router>
      <PokemonCard />
    </Router>
  )

  const pokemonImage = screen.getByRole("img", { name: /unown image/i })
  const pokemonName = screen.getByText(/unown/i)
  const pokemonId = screen.getByText(/id:/i)
  const pokemonIdValue = screen.getByText(/201/i)
  const pokemonType = screen.getByText(/Type:/i)
  const pokemonTypeValue = screen.getByText(/psychic/i)
  const pokemonHeight = screen.getByText(/Height:/i)
  const pokemonHeightValue = screen.getByText(/5/i)
  const pokemonHabilities = screen.getByText(/Habilities/i)
  const pokemonHabilitiesValue = screen.getByText(/levitate/i)
  const closeButton = screen.getByRole("button")

  expect(pokemonImage).toBeInTheDocument()
  expect(pokemonName).toBeInTheDocument()
  expect(pokemonId).toBeInTheDocument()
  expect(pokemonIdValue).toBeInTheDocument()
  expect(pokemonType).toBeInTheDocument()
  expect(pokemonTypeValue).toBeInTheDocument()
  expect(pokemonHeight).toBeInTheDocument()
  expect(pokemonHeightValue).toBeInTheDocument()
  expect(pokemonHabilities).toBeInTheDocument()
  expect(pokemonHabilitiesValue).toBeInTheDocument()
  expect(closeButton).toBeInTheDocument()
})

test("Render PokemonCard component by props", () => {
  render(
    <Router>
      <PokemonCard {...charizard} />
    </Router>
  )

  const pokemonImage = screen.getByRole("img", { name: /charizard image/i })
  const pokemonName = screen.getByText(/charizard/i)
  const pokemonId = screen.getByText(/id:/i)
  const pokemonIdValue = screen.getByText(/6/i)
  const pokemonType = screen.getByText(/Type:/i)
  const pokemonTypeValue = screen.getByText(/fire | flying/i)
  const pokemonHeight = screen.getByText(/Height:/i)
  const pokemonHeightValue = screen.getByText(/17/i)
  const pokemonHabilities = screen.getByText(/Habilities/i)
  const pokemonHabilityOneValue = screen.getByText(/blaze/i)
  const pokemonHabilityTwoValue = screen.getByText(/solar-power/i)
  const closeButton = screen.getByRole("button")

  expect(pokemonImage).toBeInTheDocument()
  expect(pokemonName).toBeInTheDocument()
  expect(pokemonId).toBeInTheDocument()
  expect(pokemonIdValue).toBeInTheDocument()
  expect(pokemonType).toBeInTheDocument()
  expect(pokemonTypeValue).toBeInTheDocument()
  expect(pokemonHeight).toBeInTheDocument()
  expect(pokemonHeightValue).toBeInTheDocument()
  expect(pokemonHabilities).toBeInTheDocument()
  expect(pokemonHabilityOneValue).toBeInTheDocument()
  expect(pokemonHabilityTwoValue).toBeInTheDocument()
  expect(closeButton).toBeInTheDocument()
})
