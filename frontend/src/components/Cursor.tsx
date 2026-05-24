import { useEffect, useState } from 'react'
import '../style/cursor.css'

function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  useEffect(() => {
    let frame: number
    let current = { x: dotPos.x, y: dotPos.y }

    const animate = () => {
      current.x += (pos.x - current.x) * 0.1
      current.y += (pos.y - current.y) * 0.1
      setDotPos({ x: current.x, y: current.y })
      frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [pos])

  return (
    <>
      <div className='cursor-dot' style={{ left: pos.x, top: pos.y }} />
      <div className='cursor-ring' style={{ left: dotPos.x, top: dotPos.y }} />
    </>
  )
}

export default Cursor