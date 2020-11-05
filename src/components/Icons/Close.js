import * as React from "react"

export function Close({ fill = "#000000", height = 32, width = 32 }) {
  return (
    <svg
      viewBox="0 0 21 21"
      fill="none"
      height={height}
      width={width}
      title="closeIcon"
    >
      <g
        fill={fill}
        fillRule="evenodd"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        data-testid="closeIconPath"
      >
        <path d="M5.5 15.5l10-10M15.5 15.5l-10-10z" />
      </g>
    </svg>
  )
}
