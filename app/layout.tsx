import { GeistSans } from "geist/font/sans"
import { Analytics } from "@vercel/analytics/react"
import type React from "react" // Import React

import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

import "@/styles/globals.css"

export const metadata = {
  title: "Limpiar - Sustainable Cleaning Made Simple",
  description: "Book eco-friendly cleaning services, whenever and wherever you need them.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("antialiased", GeistSans.className)}>
      <body className="min-h-screen bg-background">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}



import './globals.css'