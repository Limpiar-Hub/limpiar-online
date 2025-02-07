"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-primary">
      <div className="container px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
              Limpiar:
              <br />
              Sustainable Cleaning
              <br />
              Made Simple
            </h1>
            <p className="max-w-[600px] text-primary-foreground md:text-xl">
              Making a clean and comfortable space shouldn't be stressful to obtain. Book a sustainable cleaning service
              whenever, wherever you need it.
            </p>
            <Button size="lg" variant="secondary">
              Let's Get You Ready
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-limpiar-online-2025-02-07-15_29_23-ysh0SGqMgOqiHRA0CLkA8pegLqlMk6.png"
              alt="Professional cleaner at work"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

