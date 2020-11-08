import styled, { keyframes } from "styled-components"
import { rem } from "polished"

const sizeBase = rem("10px")
const delayBase = 0.075

const inner = {
  animationDelayInner: `0s`,
  widthInner: `calc(${sizeBase} * 3)`,
  heightInner: `calc(${sizeBase} * 3)`,
  animationDelayOuter: `${delayBase}s`,
  widthOuter: `calc(${sizeBase} * 4)`,
  heightOuter: `calc(${sizeBase} * 4)`,
}

const middle = {
  animationDelayInner: `${delayBase * 2}s`,
  widthInner: `calc(${sizeBase} * 5)`,
  heightInner: `calc(${sizeBase} * 5)`,
  animationDelayOuter: `${delayBase * 3}s`,
  widthOuter: `calc(${sizeBase} * 6)`,
  heightOuter: `calc(${sizeBase} * 6)`,
}

const outer = {
  animationDelayInner: `${delayBase * 4}s`,
  widthInner: `calc(${sizeBase} * 7)`,
  heightInner: `calc(${sizeBase} * 7)`,
  animationDelayOuter: `${delayBase * 5}s`,
  widthOuter: `calc(${sizeBase} * 8)`,
  heightOuter: `calc(${sizeBase} * 8)`,
}

const spinnerRotation = keyframes`
  0% {
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
  16.6666667% {
    transform: translate3d(-50%, -50%, 0) rotate(90deg);
  }
  33.3333333% {
    transform: translate3d(-50%, -50%, 0) rotate(-90deg);
  }
  50% {
    transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }
  66.6666667% {
    transform: translate3d(-50%, -50%, 0) rotate(270deg);
  }
  83.3333333% {
    transform: translate3d(-50%, -50%, 0) rotate(450deg);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
`

const spinnerCircle = {
  height: `calc(${sizeBase} * 9)`,
  width: `calc(${sizeBase} * 9)`,
}

export const SpinnerWrapper = styled.div`
  position: relative;
  height: ${spinnerCircle.height};
  width: ${spinnerCircle.width};
`

const circle = {
  borderColor: "var(--grayColor_black5)",
  animationName: spinnerRotation,
  animationDuration: "4s",
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
}

const circleGenerics = `
  &::after,
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: solid 3px ${circle.borderColor};
    border-radius: 50%;
  }
`

export const Inner = styled.div`
  ${circleGenerics}

  &::after {
    border-bottom-color: var(--color-primary_main);
    animation: ${circle.animationDuration} ${circle.animationTimingFunction} ${inner.animationDelayInner}
      ${circle.animationIterationCount} ${spinnerRotation};
    height: ${inner.heightInner};
    width: ${inner.widthInner};
  }

  &::before {
    border-bottom-color: var(--color-secondary_main);
    animation: ${circle.animationDuration} ${circle.animationTimingFunction} ${inner.animationDelayOuter}
      ${circle.animationIterationCount} ${spinnerRotation};
    height: ${inner.heightOuter};
    width: ${inner.widthOuter};
  }
`

export const Middle = styled.div`
  ${circleGenerics}

  &::after {
    border-bottom-color: var(--color-terciary_main);
    animation: ${circle.animationDuration} ${circle.animationTimingFunction} ${middle.animationDelayInner}
      ${circle.animationIterationCount} ${spinnerRotation};
    height: ${middle.heightInner};
    width: ${middle.widthInner};
  }

  &::before {
    border-bottom-color: var(--color-quaternary_main);
    animation: ${circle.animationDuration} ${circle.animationTimingFunction} ${middle.animationDelayOuter}
      ${circle.animationIterationCount} ${spinnerRotation};
    height: ${middle.heightOuter};
    width: ${middle.widthOuter};
  }
`

export const Outer = styled.div`
  ${circleGenerics}

  &::after {
    border-bottom-color: var(--color-quinary_main);
    animation: ${circle.animationDuration} ${circle.animationTimingFunction} ${outer.animationDelayInner}
      ${circle.animationIterationCount} ${spinnerRotation};
    height: ${outer.heightInner};
    width: ${outer.widthInner};
  }

  &::before {
    border-bottom-color: var(--color-sextarian_main);
    animation: ${circle.animationDuration} ${circle.animationTimingFunction} ${outer.animationDelayOuter}
      ${circle.animationIterationCount} ${spinnerRotation};
    height: ${outer.heightOuter};
    width: ${outer.widthOuter};
  }
`
