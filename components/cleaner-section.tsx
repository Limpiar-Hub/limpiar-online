"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CleanerSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[300px] md:h-[400px]"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-limpiar-online-2025-02-07-15_29_23-ysh0SGqMgOqiHRA0CLkA8pegLqlMk6.png"
              alt="Team of professional cleaners"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tighter">Get Connected to a Cleaner Near You</h2>
            <p className="text-muted-foreground">
              Find your match instantly with our network of professional cleaners in your area. Our platform connects
              you with trusted, experienced cleaning professionals.
            </p>
            <Button size="lg">Find a Cleaner</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

