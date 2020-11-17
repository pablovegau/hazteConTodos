import { useState, useEffect, useRef } from "react"

export function useNearScreen({ distance = "100px", externalRef, once = true } = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    let observer

    const element = externalRef ? externalRef.current : fromRef.current

    if (!element) {
      return
    }

    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setIsNearScreen(true)
        once && observer.disconnect()
      } else {
        !once && setIsNearScreen(false)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== "undefined" ? IntersectionObserver : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      })

      observer.observe(element)
    })

    return () => observer && observer.disconnect()
  }, [distance, externalRef, once])

  return { isNearScreen, fromRef }
}
