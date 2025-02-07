"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function PlantPowered() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[300px] md:h-[400px]"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-limpiar-online-2025-02-07-15_29_23-ysh0SGqMgOqiHRA0CLkA8pegLqlMk6.png"
              alt="Eco-friendly cleaning supplies"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tighter">Plant-Powered Cleaners</h2>
            <p className="text-muted-foreground">
              We believe in cleaning that's safe for your home and the environment. Our plant-based cleaning products
              are powerful on dirt but gentle on the planet. Experience the natural difference.
            </p>
            <Button size="lg">Shop Our Products</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


