import React from "react"

import { SpinnerWrapper, Inner, Middle, Outer } from "./styles"

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Inner />
      <Middle />
      <Outer />
    </SpinnerWrapper>
  )
}
