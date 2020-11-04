import { render } from "@testing-library/react"

import { Google } from "../"

test("Render Google icon", () => {
  const { getByTestId, getByTitle } = render(<Google />)
  const googleIcon = getByTitle(/googleicon/i)
  const googleIconPath = getByTestId(/googleiconpath/i)

  expect(googleIcon).toBeInTheDocument()
  expect(googleIcon).toHaveAttribute("width", "32")
  expect(googleIcon).toHaveAttribute("height", "32")
  expect(googleIconPath).toHaveAttribute("fill", "#000000")
})

test("Render Google icon properly passing props height and width", () => {
  const { getByTitle } = render(<Google height={48} width={48} />)
  const googleIcon = getByTitle(/googleicon/i)

  expect(googleIcon).toHaveAttribute("width", "48")
  expect(googleIcon).toHaveAttribute("height", "48")
})

test("Render Google icon with a custom fill color", () => {
  const fillColor = "#ff0000"
  const { getByTestId } = render(<Google fill={fillColor} />)
  const googleIconPath = getByTestId(/googleiconpath/i)

  expect(googleIconPath).toHaveAttribute("fill", fillColor)
})
