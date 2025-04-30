"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Filter, Search, TrendingUp, Clock, ThumbsUp, Download, Share } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import EmojiExplosion from "@/components/emoji-explosion"

// Mock meme data
const MEMES = [
  {
    id: 1,
    title: "When the code finally works",
    imageUrl: "/placeholder.svg?height=400&width=400",
    likes: 4200,
    author: "@codingmemer",
    category: "tech",
    trending: true,
    date: "2 hours ago",
  },
  {
    id: 2,
    title: "Monday morning vibes",
    imageUrl: "/placeholder.svg?height=400&width=400",
    likes: 6900,
    author: "@mondayhater",
    category: "relatable",
    trending: true,
    date: "5 hours ago",
  },
  {
    id: 3,
    title: "POV: You're explaining memes to your parents",
    imageUrl: "/placeholder.svg?height=400&width=400",
    likes: 8100,
    author: "@generationgap",
    category: "relatable",
    trending: false,
    date: "1 day ago",
  },
  {
    id: 4,
    title: "AI trying to understand human humor",
    imageUrl: "/placeholder.svg?height=400&width=400",
    likes: 3500,
    author: "@robotoverlord",
    category: "tech",
    trending: true,
    date: "3 hours ago",
  },
  {
    id: 5,
    title: "That one brain cell during an exam",
    imageUrl: "/placeholder.svg?height=400&width=400",
    likes: 9200,
    author: "@studentlife",
    category: "relatable",
    trending: false,
    date: "2 days ago",
  },
  {
    id: 6,
    title: "Gaming at 3am be like",
    imageUrl: "/placeholder.svg?height=400&width=400",
    likes: 5600,
    author: "@gamermemes",
    category: "gaming",
    trending: true,
    date: "7 hours ago",
  },
  {
    id: 7,
    title: "When someone says they don't like memes",
    imageUrl: "/placeholder.svg?height=400&width=400",
    likes: 7800,
    author: "@memedefender",
    category: "meta",
    trending: false,
    date: "4 days ago",
  },
  {
    id: 8,
    title: "Trying to explain my job to my grandma",
    imageUrl: "/placeholder.svg?height=400&width=400",
    likes: 6300,
    author: "@techworker",
    category: "tech",
    trending: false,
    date: "1 week ago",
  },
  {
    id: 9,
    title: "My plants when I forget to water them",
    imageUrl: "/placeholder.svg?height=400&width=400",
    likes: 4700,
    author: "@plantparent",
    category: "relatable",
    trending: true,
    date: "1 day ago",
  },
  {
    id: 10,
    title: "Gamers when the WiFi drops for 0.001 seconds",
    imageUrl: "/placeholder.svg?height=400&width=400",
    likes: 8900,
    author: "@gamermemes",
    category: "gaming",
    trending: true,
    date: "4 hours ago",
  },
  {
    id: 11,
    title: "My brain at 3am remembering that embarrassing thing from 10 years ago",
    imageUrl: "/placeholder.svg?height=400&width=400",
    likes: 10200,
    author: "@insomniamemes",
    category: "relatable",
    trending: false,
    date: "3 days ago",
  },
  {
    id: 12,
    title: "When you finally find that bug in your code",
    imageUrl: "/placeholder.svg?height=400&width=400",
    likes: 5100,
    author: "@debuglife",
    category: "tech",
    trending: false,
    date: "5 days ago",
  },
]

export default function MemesPage() {
  const [showEmojiExplosion, setShowEmojiExplosion] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeTab, setActiveTab] = useState("trending")
  const [memes, setMemes] = useState(MEMES)
  const [glitchEffect, setGlitchEffect] = useState(false)

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

  // Trigger random glitch effect
  useEffect(() => {
    const interval = setInterval(
      () => {
        setGlitchEffect(true)
        setTimeout(() => setGlitchEffect(false), 200)
      },
      Math.random() * 8000 + 5000,
    )

    return () => clearInterval(interval)
  }, [])

  // Filter memes based on search, category, and tab
  useEffect(() => {
    let filteredMemes = [...MEMES]

    // Filter by search query
    if (searchQuery) {
      filteredMemes = filteredMemes.filter(
        (meme) =>
          meme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          meme.author.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Filter by category
    if (activeCategory !== "all") {
      filteredMemes = filteredMemes.filter((meme) => meme.category === activeCategory)
    }

    // Sort by tab
    if (activeTab === "trending") {
      filteredMemes = filteredMemes.filter((meme) => meme.trending)
    } else if (activeTab === "latest") {
      filteredMemes.sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return dateB.getTime() - dateA.getTime()
      })
    } else if (activeTab === "top") {
      filteredMemes.sort((a, b) => b.likes - a.likes)
    }

    setMemes(filteredMemes)
  }, [searchQuery, activeCategory, activeTab])

  return (
    <main className="relative overflow-hidden bg-yellow-400 pt-12 min-h-screen">
      {/* Emoji explosion overlay */}
      {showEmojiExplosion && <EmojiExplosion />}

      {/* Hero Section */}
      <section className="relative pt-24 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
              className={`text-3xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-black via-black to-transparent mb-6 ${glitchEffect ? "glitch-text" : ""}`}
              data-text="Meme Gallery"
            >
              Meme Gallery
            </h1>

            <div className="absolute -inset-0.5 bg-yellow-400 opacity-20 blur-sm -z-10"></div>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto mb-8 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="text-xl text-black/90 leading-relaxed">
              Explore our collection of the internet's finest digital chaos
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Search and Filter Section */}
      <section className="relative py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          {/* Search Bar */}
          <div className="relative w-full md:w-auto md:flex-1 max-w-md rounded-none">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-yellow-400" />
            </div>
            <Input
              type="text"
              placeholder="Search memes..."
              className="pl-10 bg-black placeholder:text-yellow-400 rounded-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center rounded-none space-x-2 w-full md:w-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="text-yellow-400">
                  <Filter className="h-4 w-4 mr-2" />
                  {activeCategory === "all"
                    ? "All Categories"
                    : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black text-yellow-400">
                <DropdownMenuItem onClick={() => setActiveCategory("all")} className="hover:bg-white">
                  All Categories
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveCategory("tech")} className="hover:bg-white">
                  Tech
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveCategory("relatable")} className="hover:bg-white">
                  Relatable
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveCategory("gaming")} className="hover:bg-white">
                  Gaming
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveCategory("meta")} className="hover:bg-white">
                  Meta
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="trending" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-8 bg-black rounded-none">
            <TabsTrigger value="trending" className="data-[state=active]:bg-yellow-400 rounded-none data-[state=active]:text-black">
              <TrendingUp className="h-4 w-4 mr-2" />
              Trending
            </TabsTrigger>
            <TabsTrigger value="latest" className="data-[state=active]:bg-yellow-400 rounded-none data-[state=active]:text-black">
              <Clock className="h-4 w-4 mr-2" />
              Latest
            </TabsTrigger>
            <TabsTrigger value="top" className="data-[state=active]:bg-yellow-400 rounded-none data-[state=active]:text-black">
              <ThumbsUp className="h-4 w-4 mr-2" />
              Top Rated
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trending" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 rounded-none">
              {memes.map((meme, index) => (
                <MemeCard key={meme.id} meme={meme} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="latest" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {memes.map((meme, index) => (
                <MemeCard key={meme.id} meme={meme} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="top" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {memes.map((meme, index) => (
                <MemeCard key={meme.id} meme={meme} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Upload CTA */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-black p-12 text-center relative overflow-hidden"
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
            Got a{" "}
            <span className="text-yellow-400">Dank</span>{" "}
            Meme?
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
            Upload your own chaotic creations and join the meme revolution.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10 inline-block">
            <div className="absolute -inset-1 animate-pulse"></div>
            <Button
              size="lg"
              className="relative bg-black border-2 rounded-none border-yellow-400 text-white font-bold px-8 py-6"
            >
              Upload Your Meme
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}

// Meme Card Component
function MemeCard({ meme, index }) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(meme.likes)

  const handleLike = () => {
    if (!liked) {
      setLikeCount(likeCount + 1)
      setLiked(true)
    } else {
      setLikeCount(likeCount - 1)
      setLiked(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      className="bg-black border-2 border-black overflow-hidden"
    >
      <div className="relative aspect-square overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-red-500/20 mix-blend-overlay z-10"></div>
        <Image src={meme.imageUrl || "/placeholder.svg"} alt={meme.title} fill className="object-cover" />

        {/* Scan lines */}
        <div className="absolute inset-0 z-20 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="h-[1px] bg-white" style={{ marginTop: `${i * 10}px` }}></div>
          ))}
        </div>

        {/* Pixelated overlay */}
        <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(4px,1fr))] grid-rows-[repeat(auto-fill,minmax(4px,1fr))] opacity-10 z-20">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-white"
              initial={{ opacity: 0 }}
              animate={{
                opacity: Math.random() > 0.95 ? [0, 0.5, 0] : 0,
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

        {/* Trending badge */}
        {meme.trending && (
          <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center z-30">
            <TrendingUp className="h-3 w-3 mr-1" />
            Trending
          </div>
        )}

        {/* Action buttons */}
        <div className="absolute bottom-2 right-2 flex space-x-2 z-30">
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8 bg-black/50 border-white/20 text-white hover:bg-white hover:text-black"
          >
            <Download className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="h-8 w-8 bg-black/50 border-white/20 text-white hover:bg-white hover:text-black"
          >
            <Share className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{meme.title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">{meme.author}</span>
          <div className="flex items-center space-x-1">
            <button onClick={handleLike} className="flex items-center space-x-1 text-gray-400 hover:text-yellow-400">
              <ThumbsUp className={`h-4 w-4 ${liked ? "fill-yellow-400 text-yellow-400" : ""}`} />
              <span>{likeCount.toLocaleString()}</span>
            </button>
          </div>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-xs text-gray-500">{meme.date}</span>
          <span className="text-xs px-2 py-0.5 bg-black text-gray-300 rounded-full">{meme.category}</span>
        </div>
      </div>
    </motion.div>
  )
}
