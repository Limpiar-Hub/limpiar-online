"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 md:py-24">
      <div className="container px-4">
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
            className="relative aspect-[4/3] md:aspect-[3/4]"
          >
            <Image
              src="/hero.png"
              alt="Professional cleaner at work"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

