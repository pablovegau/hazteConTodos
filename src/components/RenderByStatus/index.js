import React from "react"
import { Spinner } from ".."
import { STATUS } from "../../hooks/useStatus"

import { Container } from "./styles"

export const RenderByStatus = ({ status, children, LoadingComponent, ErrorComponent }) => {
  function render() {
    if (status === STATUS.IDLE || status === STATUS.PENDING) {
      return (
        <>
          {LoadingComponent || (
            <Container>
              <Spinner />
            </Container>
          )}
        </>
      )
    }

    if (status === STATUS.REJECTED) {
      return <>{ErrorComponent || <Container>Error</Container>}</>
    }

    if (status === STATUS.RESOLVED) {
      return <>{children}</>
    }

    return null
  }

  return <>{render()}</>
}
