import React from "react"
import { Button } from "./styles"

export function RoundIconButton({ children, handleClick }) {
  return (
    <Button type="button" onClick={handleClick}>
      {children}
    </Button>
  )
}
