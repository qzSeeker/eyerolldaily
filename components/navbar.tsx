"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Instagram, User, AlignLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils" // Assuming you have this utility

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  
  // Add global styles for the animations
  useEffect(() => {
    // Create a style element for the keyframe animations
    const styleEl = document.createElement('style')
    const keyframes = `
      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }
      
      @keyframes slideIn {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(0);
        }
      }
      
      @keyframes slideOut {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }
    `
    styleEl.innerHTML = keyframes
    document.head.appendChild(styleEl)
    
    return () => {
      document.head.removeChild(styleEl)
    }
  }, [])
  
  return (
    <div className="relative">
      
      {/* Main navbar */}
      <header className="w-full bg-yellow-400 fixed z-50">
      {/* Top banner with auto-scroll effect */}
      <div className="w-full bg-black text-yellow-400 text-xs md:text-sm font-bold overflow-hidden">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div 
            className="inline-block whitespace-nowrap py-2"
            style={{
              animation: "marquee 25s linear infinite",
              willChange: "transform"
            }}
          >
            <span className="mx-4">GET READY FOR NEXT BIG THING IN MEMES ⚡</span>
            <span className="mx-4">EYEROLLDAILY IS HERE TO RULE THE MEME WORLD ⚡</span>
            <span className="mx-4">DON'T MISS OUT ON THE FUN AND REWARDS ⚡</span>
            <span className="mx-4">GET READY FOR NEXT BIG THING IN MEMES ⚡</span>
          </div>
        </div>
      </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Left - hamburger menu */}
            <button 
              onClick={toggleMenu} 
              className="text-black"
            >
              <AlignLeft className="h-7 w-7" />
            </button>
            
            {/* Center - logo */}
            <Link href="/" className="flex-1 flex justify-center">
              <span className="text-xl sm:text-2xl font-extrabold text-black">eyerolldaily</span>
            </Link>
            
            {/* Right - social media icons */}
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="text-black hover:text-gray-800">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://discord.com" className="text-black hover:text-gray-800">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.9-.608 1.3A18.566 18.566 0 0 0 8.2 4.38a.077.077 0 0 0-.077-.037c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.3 13.3 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                </svg>
              </Link>
              <Link href="https://twitter.com" className="text-black hover:text-gray-800">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile menu - full height, opens from left to right with animation */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleMenu}>
          <div 
            className="fixed inset-y-0 left-0 max-w-2xl w-full bg-yellow-400 shadow-xl z-50 overflow-y-auto"
            style={{
              animation: "slideIn 0.3s ease-in forwards",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-center mb-8">
                <span className="text-2xl font-extrabold text-black">eyerolldaily</span>
                <button 
                  onClick={toggleMenu}
                  className="text-black"
                >
                  <X className="h-7 w-7" />
                </button>
              </div>
              
              <Link onClick={toggleMenu} href="/" className="block text-black hover:border-l-4 border-white transition-all duration-100 py-4 px-2 text-xl font-bold">
                Home
              </Link>
              <Link onClick={toggleMenu} href="/memes" className="block text-black hover:border-l-4 border-white transition-all duration-100 px-2 py-4 text-xl font-bold">
                Memes
              </Link>
              <Link onClick={toggleMenu} href="/about" className="block text-black hover:border-l-4 border-white transition-all duration-100 px-2 py-4 text-xl font-bold">
                About
              </Link>
              <Link onClick={toggleMenu} href="/contact" className="block text-black hover:border-l-4 border-white transition-all duration-100 px-2 py-4 text-xl font-bold">
                Contact
              </Link>
              
              <div className="pt-8">
                <Button className="w-full rounded-none bg-black hover:bg-white hover:text-black transition-all text-yellow-400 text-lg py-6">
                  <User className="h-5 w-5 mr-2" />
                  Login
                </Button>
              </div>
              
              <div className="flex justify-center space-x-6 pt-8">
                <Link href="https://instagram.com" className="text-black hover:text-gray-800">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="https://discord.com" className="text-black hover:text-gray-800">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.9-.608 1.3A18.566 18.566 0 0 0 8.2 4.38a.077.077 0 0 0-.077-.037c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.3 13.3 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                  </svg>
                </Link>
                <Link href="https://twitter.com" className="text-black hover:text-gray-800">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}