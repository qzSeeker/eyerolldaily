"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Home, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import EmojiExplosion from "@/components/emoji-explosion"

export default function NotFound() {
  const [showEmojiExplosion, setShowEmojiExplosion] = useState(false)
  const [glitchIntensity, setGlitchIntensity] = useState(1)

  // Trigger emoji explosion randomly
  useEffect(() => {
    const interval = setInterval(
      () => {
        setShowEmojiExplosion(true)
        setTimeout(() => setShowEmojiExplosion(false), 2000)
      },
      Math.random() * 10000 + 5000,
    )

    return () => clearInterval(interval)
  }, [])

  // Increase glitch intensity randomly
  useEffect(() => {
    const interval = setInterval(
      () => {
        setGlitchIntensity(Math.random() * 3 + 1)
        setTimeout(() => setGlitchIntensity(1), 200)
      },
      Math.random() * 3000 + 1000,
    )

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex flex-col items-center justify-center p-4">
      {/* Emoji explosion overlay */}
      {showEmojiExplosion && <EmojiExplosion />}

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute top-60 right-20 w-60 h-60 bg-yellow-400 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-40 left-40 w-80 h-80 bg-red-500 rounded-full blur-3xl opacity-5"></div>
      </div>

      {/* Pixelated background grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(8px,1fr))] grid-rows-[repeat(auto-fill,minmax(8px,1fr))] h-full w-full opacity-10">
            {[...Array(400)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-yellow-500"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: Math.random() > 0.7 ? [0, 1, 0] : 0,
                }}
                transition={{
                  duration: Math.random() * 2 + 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Glitch lines */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[2px] bg-red-500 left-0 right-0 opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              height: `${Math.random() * 3 + 1}px`,
              filter: `blur(${Math.random() * 2}px)`,
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0.2, 0.8, 0.2],
              scaleY: [1, glitchIntensity, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          animate={{
            x: [0, -3, 0, 3, 0],
            filter: [`blur(0px)`, `blur(${glitchIntensity}px)`, `blur(0px)`],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 5,
            ease: "easeInOut",
          }}
          className="mb-8"
        >
          <h1 className="text-9xl font-extrabold text-white mb-4 glitch-text" data-text="404">
            404
          </h1>
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-2">
            Meme Not Found
          </p>
          <p className="text-gray-400 max-w-md mx-auto">
            The meme you're looking for has either been deleted, never existed, or has ascended to a higher plane of
            existence.
          </p>
        </motion.div>

        <div className="relative mb-12 h-64 w-64 mx-auto">
          <motion.div
            animate={{
              rotate: [-5, 5, -5],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 8,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            <Image
              src="/placeholder.svg?height=300&width=300&text=😵"
              alt="404 Error"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Scan lines */}
          <div className="absolute inset-0 z-20 opacity-20">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="h-[1px] bg-white" style={{ marginTop: `${i * 10}px` }}></div>
            ))}
          </div>

          {/* Pixelated overlay */}
          <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(4px,1fr))] grid-rows-[repeat(auto-fill,minmax(4px,1fr))] opacity-20 z-20">
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-white"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: Math.random() > 0.9 ? [0, 0.5, 0] : 0,
                }}
                transition={{
                  duration: 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-red-500 hover:from-yellow-500 hover:to-red-600 text-black font-bold"
              asChild
            >
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-bold"
              onClick={() => window.location.reload()}
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              Try Again
            </Button>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
