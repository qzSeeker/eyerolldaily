"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Flame, Instagram, ArrowRight, Sparkles, Heart, ThumbsUp, InstagramIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import MemeCard from "@/components/meme-card"
import EmojiExplosion from "@/components/emoji-explosion"
import AnimatedCounter from "@/components/animatedCounter"

export default function Home() {
  const [showEmojiExplosion, setShowEmojiExplosion] = useState(false)

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

  const memes = [
    {
      id: 1,
      title: "Even photos has taste",
      imageUrl: "/humoudmosabih.jpg",
      likes: 1200,
      author: "@humoudmosabih",
    },
    {
      id: 2,
      title: "Monday morning vibes",
      imageUrl: "/sam.jpg",
      likes: 900,
      author: "@samuelsaulsbury",
    },
    {
      id: 3,
      title: "Office days",
      imageUrl: "/thanks.jpg",
      likes: 1300,
      author: "@eyerolldaily",
    },
  ]

  const reasons = [
    {
      title: "Escape reality, one meme at a time",
      icon: <Sparkles className="h-8 w-8 text-black" />,
      description: "Why face your problems when you can scroll through memes instead?",
    },
    {
      title: "Laughter is cheaper than therapy",
      icon: <Heart className="h-8 w-8 text-black" />,
      description: "Save thousands on therapy bills with our premium meme content",
    },
    {
      title: "Become the main character",
      icon: <ThumbsUp className="h-8 w-8 text-black" />,
      description: "Post a viral meme and enjoy your 15 minutes of internet fame",
    },
    {
      title: "Join a community of equally unhinged people",
      icon: <Flame className="h-8 w-8 text-black" />,
      description: "Find your people - they're just as weird as you are",
    },
  ]

  return (
    <main className="relative overflow-hidden bg-yellow-400 min-h-screen pt-20">
      {/* Emoji explosion overlay */}
      {showEmojiExplosion && <EmojiExplosion />}

      {/* Hero Section - Futuristic Chaos */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 mx-auto overflow-hidden">
        {/* Pixelated background grid */}
        {/* <div className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(8px,1fr))] grid-rows-[repeat(auto-fill,minmax(8px,1fr))] h-full w-full">
              {[...Array(400)].map((_, i) => (
                <motion.div
                  key={i}
                  className=""
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
        </div> */}

        {/* Red glitch lines */}
        {/* <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[2px] bg-black left-0 right-0 opacity-70"
              style={{ top: `${Math.random() * 100}%` }}
              animate={{
                x: ["-100%", "100%"],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div> */}

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mb-8">
              <motion.div
                className="relative"
              >
                <div className="max-w-5xl right-0 left-0 mx-auto relative font-bold tracking-tighter mb-2 text-black">
                  <h1 className="text-2xl md:text-5xl relative leading-relaxed">
                  <motion.span
                    className="glitch-text text-4xl md:text-5xl"
                    data-text="eyerolldaily"
                    animate={{
                      x: [0, -3, 0, 3, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                  >eyerolldaily
                  </motion.span> – Where Sarcasm Scrolls Faster Than News</h1>
                  <motion.h2 className="text-md md:text-xl mt-4 tracking-wide opacity-80 glitch-text">
                      Your daily dose of eye-roll-worthy memes, awkward truths & painfully relatable content.
                  </motion.h2>

                  {/* Random glitch effect */}
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-0 left-0 right-0 h-[3px] bg-white opacity-0"
                      style={{ top: `${i * 5 + Math.random() * 5}%` }}
                      animate={{
                        opacity: [0, 0.8, 0],
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 0.2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: Math.random() * 10 + 5,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Futuristic Meme Display */}
            <motion.div
              className="relative h-64 sm:h-80 md:h-96 max-w-3xl mx-auto my-12 perspective-[1000px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-black backdrop-blur-sm overflow-hidden"
                animate={{
                  rotateY: [-5, 5, -5],
                  rotateX: [2, -2, 2],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(4px,1fr))] grid-rows-[repeat(auto-fill,minmax(4px,1fr))] opacity-20">
                  {[...Array(1000)].map((_, i) => (
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

                <Image
                  src="https://images.unsplash.com/photo-1639628735078-ed2f038a193e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Meme splash image"
                  fill
                  className="object-contain p-8 mix-blend-lighten"
                  priority
                />

                {/* Scan line effect */}
                <motion.div className="absolute inset-0 pointer-events-none" animate={{}}>
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute left-0 right-0 h-[1px] bg-white/20"
                      style={{ top: `${(i * 100) / 20}%` }}
                    />
                  ))}
                </motion.div>

                {/* Floating emojis with more chaotic movement */}
                <motion.div
                  className="absolute top-5 right-10"
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 10, -10, 0],
                    rotate: [0, 20, -20, 0],
                    scale: [1, 1.2, 0.8, 1],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-5xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">🤣</span>
                </motion.div>

                <motion.div
                  className="absolute bottom-10 left-10"
                  animate={{
                    y: [0, 15, -15, 0],
                    x: [0, -10, 10, 0],
                    rotate: [0, -20, 20, 0],
                    scale: [1, 0.8, 1.2, 1],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 4,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <span className="text-5xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">💀</span>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 left-1/4"
                  animate={{
                    y: [0, 10, -10, 0],
                    x: [0, 15, -15, 0],
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.1, 0.9, 1],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2.5,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <span className="text-5xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">😂</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Futuristic CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative inline-block py-8">
              <Button
                size="lg"
                className="relative bg-black text-white font-bold text-xl px-8 py-6 rounded-none shadow-lg overflow-hidden z-10"
              >
                <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(2px,1fr))] grid-rows-[repeat(auto-fill,minmax(2px,1fr))] opacity-30">
                  {[...Array(100)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-white"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: Math.random() > 0.9 ? [0, 1, 0] : 0,
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
                <span className="relative z-10 flex items-center">
                  Get Meme&apos;d
                  <motion.span
                    animate={{
                      rotate: [0, 20, 0, -20, 0],
                      scale: [1, 1.2, 1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="ml-2"
                  >
                    🔥
                  </motion.span>
                </span>
              </Button>
            </motion.div>

            {/* Futuristic stats counter */}
            <div className="mt-12 md:mt-20 flex flex-col md:flex-row items-center justify-evenly gap-12 md:gap-0 bg-black p-8 max-w-7xl right-0 left-0 mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl text-yellow-400 uppercase drop-shadow-md tracking-wider mb-2">Daily Memes</div>
                <div className="text-5xl font-mono text-white font-bold">
                  <AnimatedCounter from={9000} to={9999} />+
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl md:text-3xl text-yellow-400 uppercase drop-shadow-md tracking-wider mb-2">Memers</div>
                <div className="text-5xl font-mono text-white font-bold">
                  <AnimatedCounter from={40000} to={42069} />
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl md:text-3xl text-yellow-400 uppercase drop-shadow-md tracking-wider mb-2">Laughs</div>
                <div className="text-5xl font-mono text-white font-bold">
                  <AnimatedCounter from={990000} to={1000000} />+
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meme Feed Preview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-12 text-white">
            <span className="text-black">Fresh</span>{" "}
            Memes Daily
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memes.map((meme, index) => (
              <motion.div
                key={meme.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  rotate: Math.random() > 0.5 ? 1 : -1,
                }}
              >
                <MemeCard meme={meme} />
              </motion.div>
            ))}
          </div>

          <div className="text-center my-12 md:my-20">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/memes">
              <Button
                className="rounded-none text-xl bg-black md:text-3xl text-yellow-400 hover:bg-yellow-400 hover:text-white px-12 py-8"
              >
                See More Memes →
              </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-white">
            Why Join the{" "}
            <span className="text-yellow-400">
              Memevolution
            </span>
            ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-yellow-400 to-yellow-400/90 p-6"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-white/30 p-3 rounded-lg">{reason.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">{reason.title}</h3>
                    <p className="text-black">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-white">
            Follow{" "}
            <span className="text-black">
              @eyerolldaily
            </span>
          </h2>

          <p className="text-black text-md md:text-xl mb-8 max-w-2xl mx-auto">
            Double tap for dopamine. Follow us on Instagram for your daily dose of meme therapy.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              href="https://instagram.com/eyerolldaily"
              target="_blank"
              className="inline-flex items-center bg-black text-white font-bold px-6 py-3"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow @eyerolldaily
            </Link>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {["meme-1.jpg", "meme-2.jpg", "meme-3.jpg", "meme-4.jpg", "meme-5.jpg", "meme-6.jpg",].map((meme, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: Math.random() > 0.5 ? 2 : -2 }}
                className="aspect-square relative overflow-hidden rounded-lg"
              >
                <Image
                  src={`/${meme}`}
                  alt={`Instagram post`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-black p-8 md:p-12"
        >
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold mb-6 text-white"
            animate={{
              x: [0, -2, 0, 2, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            Ready to Join the Chaos?
          </motion.h2>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Sign up now and get a free dose of serotonin with every scroll.
          </p>

          <motion.div whileHover={{ scale: .9 }} whileTap={{ scale: 0.9 }}>
            <button
              className="bg-yellow-400 flex items-center text-black font-bold text-xl px-5 py-4 shadow-xl"
            >
              Join the Chaos
              <Flame className="ml-2 h-8 w-8" />
            </button>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
