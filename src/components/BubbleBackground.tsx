import { useEffect, useRef } from 'react'

interface Bubble {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
    color: string
}

const BubbleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        // Bubble colors
        const colors = [
            'rgba(59, 130, 246, 0.3)',   // blue
            'rgba(139, 92, 246, 0.3)',   // purple
            'rgba(236, 72, 153, 0.3)',   // pink
            'rgba(16, 185, 129, 0.3)',   // green
            'rgba(245, 158, 11, 0.3)',   // amber
            'rgba(6, 182, 212, 0.3)',    // cyan
        ]

        // Create bubbles
        const bubbles: Bubble[] = []
        const numBubbles = 15

        for (let i = 0; i < numBubbles; i++) {
            bubbles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                radius: Math.random() * 60 + 40,
                color: colors[Math.floor(Math.random() * colors.length)],
            })
        }

        // Check collision between two bubbles
        const checkCollision = (b1: Bubble, b2: Bubble) => {
            const dx = b2.x - b1.x
            const dy = b2.y - b1.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            return distance < b1.radius + b2.radius
        }

        // Resolve collision between two bubbles
        const resolveCollision = (b1: Bubble, b2: Bubble) => {
            const dx = b2.x - b1.x
            const dy = b2.y - b1.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance === 0) return // Prevent division by zero

            // Normalize collision vector
            const nx = dx / distance
            const ny = dy / distance

            // Relative velocity
            const dvx = b2.vx - b1.vx
            const dvy = b2.vy - b1.vy

            // Relative velocity in collision normal direction
            const dvn = dvx * nx + dvy * ny

            // Do not resolve if velocities are separating
            if (dvn > 0) return

            // Collision impulse
            const impulse = (2 * dvn) / 2 // Assuming equal mass

            // Update velocities
            b1.vx += impulse * nx
            b1.vy += impulse * ny
            b2.vx -= impulse * nx
            b2.vy -= impulse * ny

            // Separate bubbles to prevent overlap
            const overlap = (b1.radius + b2.radius - distance) / 2
            b1.x -= overlap * nx
            b1.y -= overlap * ny
            b2.x += overlap * nx
            b2.y += overlap * ny
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Update and draw bubbles
            bubbles.forEach((bubble, i) => {
                // Update position
                bubble.x += bubble.vx
                bubble.y += bubble.vy

                // Bounce off walls
                if (bubble.x - bubble.radius < 0 || bubble.x + bubble.radius > canvas.width) {
                    bubble.vx *= -1
                    bubble.x = Math.max(bubble.radius, Math.min(canvas.width - bubble.radius, bubble.x))
                }
                if (bubble.y - bubble.radius < 0 || bubble.y + bubble.radius > canvas.height) {
                    bubble.vy *= -1
                    bubble.y = Math.max(bubble.radius, Math.min(canvas.height - bubble.radius, bubble.y))
                }

                // Check collisions with other bubbles
                for (let j = i + 1; j < bubbles.length; j++) {
                    if (checkCollision(bubble, bubbles[j])) {
                        resolveCollision(bubble, bubbles[j])
                    }
                }

                // Draw bubble
                ctx.beginPath()
                ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2)
                ctx.fillStyle = bubble.color
                ctx.fill()

                // Add glow effect
                const gradient = ctx.createRadialGradient(
                    bubble.x,
                    bubble.y,
                    0,
                    bubble.x,
                    bubble.y,
                    bubble.radius
                )
                gradient.addColorStop(0, bubble.color.replace('0.3', '0.5'))
                gradient.addColorStop(1, bubble.color.replace('0.3', '0'))
                ctx.fillStyle = gradient
                ctx.fill()
            })

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ background: 'transparent' }}
        />
    )
}

export default BubbleBackground
