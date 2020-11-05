import React from "react"
import { render } from "@testing-library/react"

import { Close } from "../"

test("Render close icon", () => {
  const { getByTestId, getByTitle } = render(<Close />)
  const closeIcon = getByTitle(/closeicon/i)
  const closeIconPath = getByTestId(/closeiconpath/i)

  expect(closeIcon).toBeInTheDocument()
  expect(closeIcon).toHaveAttribute("width", "32")
  expect(closeIcon).toHaveAttribute("height", "32")
  expect(closeIconPath).toHaveAttribute("fill", "#000000")
})

test("Render close icon properly passing props height and width", () => {
  const { getByTitle } = render(<Close height={48} width={48} />)
  const closeIcon = getByTitle(/closeicon/i)

  expect(closeIcon).toHaveAttribute("width", "48")
  expect(closeIcon).toHaveAttribute("height", "48")
})

test("Render close icon with a custom fill color", () => {
  const fillColor = "#ff0000"
  const { getByTestId } = render(<Close fill={fillColor} />)
  const closeIconPath = getByTestId(/closeiconpath/i)

  expect(closeIconPath).toHaveAttribute("fill", fillColor)
})
