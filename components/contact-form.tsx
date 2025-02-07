"use client"

import { motion } from "framer-motion"
import Image from "next/image" // Correct import for Next.js Image component
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-gray-900/90">
        <Image
          src="/logo.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="mix-blend-overlay"
        />
      </div>
      <div className="container px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6">
            Need something else? Fill out the form and someone will get right back to you!
          </h2>
          <form className="space-y-4">
            <Input placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input placeholder="Phone" />
            <Textarea placeholder="Message" />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

