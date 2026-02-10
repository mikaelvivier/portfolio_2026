import { useEffect, useState } from 'react'

interface Dot {
    id: number
    x: number
    y: number
    color: string
    opacity: number
}

const CursorTrail = () => {
    const [dots, setDots] = useState<Dot[]>([])
    const [nextId, setNextId] = useState(0)

    const colors = [
        '#3b82f6', // blue
        '#8b5cf6', // purple
        '#ec4899', // pink
        '#10b981', // green
        '#f59e0b', // amber
        '#06b6d4', // cyan
    ]

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const newDot: Dot = {
                id: nextId,
                x: e.clientX,
                y: e.clientY,
                color: colors[Math.floor(Math.random() * colors.length)],
                opacity: 1,
            }

            setDots((prevDots) => {
                // Keep only last 20 dots for performance
                const updatedDots = [...prevDots, newDot].slice(-20)
                return updatedDots
            })

            setNextId((prev) => prev + 1)
        }

        // Throttle mouse move events
        let lastTime = 0
        const throttledMouseMove = (e: MouseEvent) => {
            const now = Date.now()
            if (now - lastTime > 30) {
                // ~30fps
                handleMouseMove(e)
                lastTime = now
            }
        }

        window.addEventListener('mousemove', throttledMouseMove)

        // Fade out dots over time
        const fadeInterval = setInterval(() => {
            setDots((prevDots) =>
                prevDots
                    .map((dot) => ({
                        ...dot,
                        opacity: dot.opacity - 0.05,
                    }))
                    .filter((dot) => dot.opacity > 0)
            )
        }, 50)

        return () => {
            window.removeEventListener('mousemove', throttledMouseMove)
            clearInterval(fadeInterval)
        }
    }, [nextId])

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            {dots.map((dot) => (
                <div
                    key={dot.id}
                    className="absolute w-2 h-2 rounded-full transition-opacity duration-100"
                    style={{
                        left: dot.x - 4,
                        top: dot.y - 4,
                        backgroundColor: dot.color,
                        opacity: dot.opacity,
                        boxShadow: `0 0 8px ${dot.color}`,
                    }}
                />
            ))}
        </div>
    )
}

export default CursorTrail
