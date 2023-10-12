import { useState, useEffect } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { Circle } from './Arrow.style'

export default function Arrow() {
  const [showCircle, setShowCircle] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setShowCircle(true)
      } else {
        setShowCircle(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!showCircle) return null

  return (
    <Circle onClick={handleClick}>
      <i><AiOutlineArrowUp/></i>
    </Circle>
  )
}
