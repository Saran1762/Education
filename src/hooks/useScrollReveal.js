import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook to detect when an element scrolls into the viewport.
 * Uses IntersectionObserver for 60fps GPU-accelerated scroll animations.
 * Once triggered, the element remains visible.
 *
 * @param {Object} options IntersectionObserver options (threshold, rootMargin)
 * @returns {[React.RefObject, boolean]} [ref, isVisible]
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const threshold = options.threshold !== undefined ? options.threshold : 0.05
    const rootMargin = options.rootMargin || '0px 0px 60px 0px'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [options.threshold, options.rootMargin])

  return [ref, isVisible]
}
