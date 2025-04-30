"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Users, Trophy, Calendar, Zap, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import EmojiExplosion from "@/components/emoji-explosion"

export default function AboutPage() {
  const [showEmojiExplosion, setShowEmojiExplosion] = useState(false)

  // Trigger emoji explosion randomly
  useEffect(() => {
    const interval = setInterval(
      () => {
        setShowEmojiExplosion(true)
        setTimeout(() => setShowEmojiExplosion(false), 2000)
      },
      Math.random() * 15000 + 10000,
    )

    return () => clearInterval(interval)
  }, [])

  const timelineEvents = [
    {
      year: "2019",
      title: "The Birth of Chaos",
      description: "Started as a Discord channel where three friends shared terrible memes",
      icon: <Calendar className="h-6 w-6 text-yellow-400" />,
    },
    {
      year: "2020",
      title: "Pandemic Meme Explosion",
      description: "Gained 100K followers during lockdown as everyone lost their minds",
      icon: <Zap className="h-6 w-6 text-red-500" />,
    },
    {
      year: "2021",
      title: "The Great Meme War",
      description: "Survived the great meme page purge and emerged stronger than ever",
      icon: <Trophy className="h-6 w-6 text-yellow-400" />,
    },
    {
      year: "2022",
      title: "Going Mainstream",
      description: "Featured on major news outlets as 'The voice of a generation's collective breakdown'",
      icon: <Sparkles className="h-6 w-6 text-red-500" />,
    },
    {
      year: "2023",
      title: "The Meme Empire",
      description: "Expanded to all social platforms and launched the eyerolldaily website",
      icon: <Users className="h-6 w-6 text-yellow-400" />,
    },
  ]

  const teamMembers = [
    {
      name: "MemeL0rd",
      role: "Chief Meme Officer",
      bio: "Professional internet addict. Has seen every meme since 2010. Probably needs therapy.",
      avatar: "/placeholder.svg?height=200&width=200&text=😎",
    },
    {
      name: "GlitchQueen",
      role: "Content Chaos Director",
      bio: "Turns normal images into cursed content. Banned from several countries for her memes.",
      avatar: "/placeholder.svg?height=200&width=200&text=🤪",
    },
    {
      name: "VoidWalker",
      role: "Void Screamer",
      bio: "Nobody knows what they do. Nobody asks. The memes appear and that's all that matters.",
      avatar: "/placeholder.svg?height=200&width=200&text=👻",
    },
    {
      name: "PixelPunisher",
      role: "Tech Wizard",
      bio: "Keeps the servers running despite the cursed energy. Powered by energy drinks and spite.",
      avatar: "/placeholder.svg?height=200&width=200&text=🧙‍♂️",
    },
  ]

  return (
    <main className="relative overflow-hidden bg-yellow-400 pt-12 min-h-screen">
      {/* Emoji explosion overlay */}
      {showEmojiExplosion && <EmojiExplosion />}

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

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            className="relative mb-8"
            animate={{
              rotate: [0, -1, 0, 1, 0],
              scale: [1, 1.01, 1, 1.01, 1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              ease: "easeInOut",
            }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-black via-black to-transparent mb-6">
              About Us
            </h1>

            {/* <div className="absolute -inset-0.5 bg-yellow-400 opacity-20 blur-sm -z-10"></div> */}
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto mb-12 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-red-500/10 rounded-lg -z-10"></div>
            <p className="text-xl text-white leading-relaxed relative z-10 p-6">
              <span className="text-black font-bold">eyerolldaily</span> is the internet's most chaotic meme
              collective. We're not just a meme page - we're a digital asylum where humor goes to lose its mind. Founded
              by sleep-deprived internet addicts with questionable mental health, we've grown into a community of
              millions who prefer to laugh at the void rather than scream into it.
            </p>

            {/* Glitch lines */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-[1px] bg-red-500 left-0 right-0 opacity-70"
                style={{ top: `${20 * i}%` }}
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
          </motion.div>

          <motion.div
            className="relative inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="relative rounded-none bg-black border-2 border-black text-white font-bold px-8 py-6"
            >
              Join Our Cult
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Our Story Timeline */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Our{" "}
            <span className="text-black">Chaotic</span>{" "}
            Timeline
          </h2>
          <p className="text-black/90 max-w-2xl mx-auto">
            A brief history of how we lost our minds and found our people
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 to-red-500 opacity-50"></div>

          {/* Timeline events */}
          <div className="relative z-10">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-12 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center"
              >
                <div
                  className={`mb-4 md:mb-0 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:order-3 md:text-left md:pl-8"}`}
                >
                  <h3 className="text-2xl font-bold text-black mb-2">{event.title}</h3>
                  <p className="text-black">{event.description}</p>
                </div>

                <div className="flex justify-center items-center mb-4 md:mb-0 md:order-2">
                  <div className="relative">
                    <div className="absolute -inset-3 bg-white rounded-full opacity-50 blur-sm animate-pulse"></div>
                    <div className="relative bg-black rounded-full p-3 z-10">
                      {event.icon}
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 0 ? "md:order-3 md:pl-8 md:text-left" : "md:pr-8 md:text-right"}`}>
                  <span className="inline-block bg-black px-4 py-2 rounded-full text-yellow-400 font-mono font-bold">
                    {event.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4">
            The{" "}
            <span className="text-black">Unhinged</span>{" "}
            Team
          </h2>
          <p className="text-black/90 max-w-2xl mx-auto">Meet the sleep-deprived internet addicts behind the madness</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              className="bg-black border border-gray-800 rounded-xl overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-red-500/20 z-10"></div>
                <Image src={member.avatar || "/placeholder.svg"} alt={member.name} fill className="object-cover" />

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

              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-yellow-400 font-mono text-sm mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>

                {/* Glitch line */}
                <motion.div
                  className="absolute h-[1px] bg-red-500 left-0 right-0 opacity-70"
                  style={{ top: "50%" }}
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
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-black border-2 border-white rounded-xl p-8 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
            <h3 className="text-5xl font-bold text-white mb-2">5M+</h3>
            <p className="text-yellow-400 font-mono uppercase tracking-wider">Monthly Visitors</p>

            {/* Pixelated corner */}
            <div className="absolute top-0 right-0 w-16 h-16 grid grid-cols-4 grid-rows-4">
              {[...Array(16)].map((_, i) => (
                <div key={i} className={`${Math.random() > 0.5 ? "bg-yellow-400" : "bg-transparent"} opacity-30`}></div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-black border-2 border-white rounded-xl p-8 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent"></div>
            <h3 className="text-5xl font-bold text-white mb-2">5K+</h3>
            <p className="text-red-500 font-mono uppercase tracking-wider">Memes Created</p>

            {/* Pixelated corner */}
            <div className="absolute top-0 right-0 w-16 h-16 grid grid-cols-4 grid-rows-4">
              {[...Array(16)].map((_, i) => (
                <div key={i} className={`${Math.random() > 0.5 ? "bg-red-500" : "bg-transparent"} opacity-30`}></div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black border-2 border-white rounded-xl p-8 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <h3 className="text-5xl font-bold text-white mb-2">3k+</h3>
            <p className="text-white font-mono uppercase tracking-wider">Social Followers</p>

            {/* Pixelated corner */}
            <div className="absolute top-0 right-0 w-16 h-16 grid grid-cols-4 grid-rows-4">
              {[...Array(16)].map((_, i) => (
                <div key={i} className={`${Math.random() > 0.5 ? "bg-white" : "bg-transparent"} opacity-30`}></div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-400/10 to-red-500/10 rounded-2xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            {/* Random glitch pixels */}
            <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(4px,1fr))] grid-rows-[repeat(auto-fill,minmax(4px,1fr))] opacity-10">
              {[...Array(500)].map((_, i) => (
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

            {/* Scan lines */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute h-[1px] bg-white/20 left-0 right-0"
                style={{ top: `${(i * 100) / 20}%` }}
              ></div>
            ))}
          </div>

          <h2 className="text-4xl font-extrabold text-white mb-6 relative z-10">
            Want to{" "}
            <span className="text-black">Join</span> the
            Madness?
          </h2>

          <p className="text-xl text-black/90 mb-8 max-w-2xl mx-auto relative z-10">
            We're always looking for fellow meme lords to join our chaotic collective.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10 inline-block">
            <Button
              size="lg"
              className="relative bg-black border-2 border-white text-white font-bold px-8 py-6 rounded-none"
            >
              Apply to Join
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
