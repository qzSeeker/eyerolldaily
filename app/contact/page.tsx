"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Send, MessageSquare, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import EmojiExplosion from "@/components/emoji-explosion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [showEmojiExplosion, setShowEmojiExplosion] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [glitchText, setGlitchText] = useState(false)

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

  // Trigger random glitch text effect
  useEffect(() => {
    const interval = setInterval(
      () => {
        setGlitchText(true)
        setTimeout(() => setGlitchText(false), 200)
      },
      Math.random() * 5000 + 3000,
    )

    return () => clearInterval(interval)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setShowEmojiExplosion(true)

      // Reset form after submission
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset submission status after a delay
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <main className="relative overflow-hidden bg-yellow-400 min-h-screen pt-12">
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
            <h1
              className={`text-5xl md:text-7xl font-extrabold tracking-tight text-black mb-6 ${glitchText ? "glitch-text" : ""}`}
              data-text="Contact Us"
            >
              Contact Us
            </h1>

            <div className="absolute -inset-0.5 bg-yellow-400 opacity-20 blur-sm -z-10"></div>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto mb-12 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="text-xl text-black/90 leading-relaxed relative z-10 p-6">
              Got a meme idea? Want to join our chaotic collective? Or just need someone to scream into the void with?
              Drop us a message and we'll get back to you when we remember to check our inbox.
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
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative bg-black border border-gray-800 rounded-none p-8 overflow-hidden">
              {/* Scan lines */}
              <div className="absolute inset-0 z-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="h-[1px] bg-white" style={{ marginTop: `${i * 20}px` }}></div>
                ))}
              </div>

              {/* Pixelated corner */}
              <div className="absolute top-0 right-0 w-16 h-16 grid grid-cols-4 grid-rows-4 z-0">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className={`${Math.random() > 0.5 ? "bg-yellow-400" : "bg-transparent"} opacity-20`}
                  ></div>
                ))}
              </div>

              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-yellow-400/20 to-red-500/20 rounded-lg p-6 text-center"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-300 mb-4">
                      Your message has been sent to the void. We'll get back to you when Mercury is in retrograde.
                    </p>
                    <div className="text-5xl mb-4">🎉</div>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold"
                    >
                      Send Another
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="bg-yellow-400 border-white rounded-none placeholder:text-black"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="bg-yellow-400 border-white rounded-none placeholder:text-black"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="bg-yellow-400 border-white rounded-none placeholder:text-black"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="bg-yellow-400 border-white rounded-none placeholder:text-black min-h-[150px]"
                        placeholder="Your message here..."
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-yellow-400 rounded-none text-black font-bold py-3"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-red-500/20 rounded-xl blur-sm"></div>
              <div className="relative bg-black border border-gray-800 rounded-none p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <MessageSquare className="mr-3 h-6 w-6 text-yellow-400" />
                  Chat With Us
                </h3>
                <p className="text-gray-300 mb-4">
                  We're usually online during weird hours because sleep is for the weak.
                </p>
                <div className="font-mono text-yellow-400">Discord: eyerolldaily#4200</div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-red-500/20 rounded-xl blur-sm"></div>
              <div className="relative bg-black border border-gray-800 rounded-none p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Mail className="mr-3 h-6 w-6 text-red-500" />
                  Email Us
                </h3>
                <p className="text-gray-300 mb-4">
                  For business inquiries, collaborations, or to send us your therapy bills.
                </p>
                <div className="font-mono text-red-500">memes@eyerolldaily.com</div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-red-500/20 rounded-xl blur-sm"></div>
              <div className="relative bg-black border border-gray-800 rounded-none p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <MapPin className="mr-3 h-6 w-6 text-white" />
                  Find Us
                </h3>
                <p className="text-gray-300 mb-4">Our physical location is as chaotic as our content.</p>
                <div className="font-mono text-white">
                  The Void, Internet
                  <br />
                  Meme Street, 42069
                  <br />
                  Dimension C-137
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-red-500/20 rounded-xl blur-sm"></div>
              <div className="relative bg-black border border-gray-800 rounded-none p-8">
                <h3 className="text-xl font-bold text-white mb-4">FAQ</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-yellow-400">Can I submit my memes?</h4>
                    <p className="text-gray-300">Yes, but they better be good or we'll roast you.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-yellow-400">Do you do collaborations?</h4>
                    <p className="text-gray-300">Only if you're as unhinged as we are.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-yellow-400">Are you hiring?</h4>
                    <p className="text-gray-300">We're always looking for fellow meme lords to join our chaos.</p>
                  </div>
                </div>
              </div>
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
          className="bg-black rounded-none p-12 text-center relative overflow-hidden"
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
            Follow Us{" "}
            <span className="text-yellow-400">
              Everywhere
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
            Join our chaotic community across all social platforms for your daily dose of digital insanity.
          </p>

          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {["Instagram", "Twitter", "Reddit", "Discord"].map((platform, index) => (
              <motion.div
                key={platform}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Button
                  variant="outline"
                  className="border-2 rounded-none border-yellow-400 text-white hover:bg-yellow-400 hover:text-black font-bold"
                >
                  {platform}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  )
}
