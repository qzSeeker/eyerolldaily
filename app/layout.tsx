import type React from "react"
import type { Metadata } from "next"
import { Inter, Unbounded } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "../components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })
const unbound = Unbounded({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "eyerolldaily - Where Memes Cry and Laugh Together",
  description: "The ultimate meme-based social website for viral internet humor and Gen-Z culture.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={unbound.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}
