"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Twitter, Github, Youtube, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t-2 border-black bg-yellow-400">
      <div className="max-w-7xl mx-auto right-0 left-0 px-4 sm:px-8 lg:px-8 py-12">
        <div className="">
            {/* Logo and description */}
            <div className="md:col-span-2">
              <div
                className="font-extrabold text-black text-4xl md:text-7xl mb-4"
              >
                eyerolldaily
              </div>
              <p className="text-black/90 mb-4 text-xs md:text-lg">
                The internet's most chaotic meme collective. Where humor goes to lose its mind and find its people.
              </p>
            </div>
        </div>

        <div className="mt-12 pt-8">
          <p className="text-black text-sm md:text-xl">
            © {new Date().getFullYear()} eyerolldaily. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
