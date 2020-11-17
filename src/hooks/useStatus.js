import { useState } from "react"

export const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
}

export function useStatus() {
  const [status, setStatus] = useState(STATUS.IDLE)

  return { status, setStatus, STATUS }
}
