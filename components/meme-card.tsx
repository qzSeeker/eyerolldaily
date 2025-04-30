"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Heart } from "lucide-react"

interface Meme {
  id: number
  title: string
  imageUrl: string
  likes: number
  author: string
}

interface MemeCardProps {
  meme: Meme
}

export default function MemeCard({ meme }: MemeCardProps) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(meme.likes)

  const handleLike = () => {
    if (!liked) {
      setLikeCount(likeCount + 1)
      setLiked(true)

      // Trigger confetti or some effect
      setTimeout(() => setLiked(false), 1000)
    }
  }

  return (
    <Card className="overflow-hidden bg-black border border-white rounded-none transition-all duration-300">
      <CardContent className="p-0 relative">
        <div className="relative aspect-square">
          <Image src={meme.imageUrl || "/placeholder.svg"} alt={meme.title} fill className="object-cover" />
        </div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <h3 className="text-white font-bold text-lg">{meme.title}</h3>
        </motion.div>
      </CardContent>

      <CardFooter className="flex justify-between items-center p-4 bg-black">
        <div className="text-sm text-gray-400">{meme.author}</div>

        <motion.button
          onClick={handleLike}
          whileTap={{ scale: 0.8 }}
          className="flex items-center space-x-1 text-gray-400 hover:text-yellow-400"
        >
          <Heart className={`h-5 w-5 ${liked ? "fill-yellow-400 text-yellow-400" : ""}`} />
          <span>{likeCount.toLocaleString()}</span>
        </motion.button>
      </CardFooter>
    </Card>
  )
}
