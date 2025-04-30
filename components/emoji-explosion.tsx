"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

// List of meme-related emojis
const emojis = ["😂", "🤣", "💀", "👽", "🔥", "💯", "🙄", "👀", "🤡", "😭", "🥴", "😅", "🤦‍♂️", "🤦‍♀️", "🤷‍♂️", "🤷‍♀️"]

interface EmojiParticle {
  id: number
  emoji: string
  x: number
  y: number
  scale: number
  rotation: number
}

export default function EmojiExplosion() {
  const [particles, setParticles] = useState<EmojiParticle[]>([])

  useEffect(() => {
    // Create random emoji particles
    const newParticles: EmojiParticle[] = []

    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        x: 50 + Math.random() * 20 - 10, // centered with some variation
        y: 50 + Math.random() * 20 - 10, // centered with some variation
        scale: 0.5 + Math.random() * 1.5,
        rotation: Math.random() * 360,
      })
    }

    setParticles(newParticles)

    // Clean up
    return () => {
      setParticles([])
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-2xl sm:text-3xl md:text-4xl"
          initial={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            scale: 0,
            rotate: 0,
          }}
          animate={{
            x: `${particle.x - 50 + Math.random() * 100}vw`,
            y: `${particle.y - 100 - Math.random() * 50}vh`,
            scale: particle.scale,
            rotate: particle.rotation,
          }}
          transition={{
            duration: 1.5 + Math.random(),
            ease: "easeOut",
          }}
          style={{
            opacity: 0.8 - Math.random() * 0.5,
          }}
        >
          {particle.emoji}
        </motion.div>
      ))}
    </div>
  )
}
