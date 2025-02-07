"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { title: "Residential", href: "/residential" },
  { title: "Commercial", href: "/commercial" },
  { title: "Cleaning Supplies", href: "/supplies" },
  { title: "About Us", href: "/about" },
  { title: "Locations", href: "/locations" },
]

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-limpiar-online-2025-02-07-15_29_23-53YuMvMHaTNst2AnYPaNOeYTaLh8Iw.png"
            alt="Limpiar Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="hidden font-bold sm:inline-block">Limpiar</span>
        </Link>
        <div className="hidden md:flex md:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="ghost" asChild className="hidden md:inline-flex">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="hidden md:inline-flex">
            <Link href="/book">Book Now</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link key={item.title} href={item.href} className="text-sm font-medium">
                    {item.title}
                  </Link>
                ))}
                <Link href="/login" className="text-sm font-medium">
                  Login
                </Link>
                <Link href="/book" className="text-sm font-medium">
                  Book Now
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

