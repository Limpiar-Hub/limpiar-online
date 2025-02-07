"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function EarningsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tighter">More Jobs Equals More Earnings</h2>
            <p className="text-muted-foreground">
              Want to earn more as a cleaning professional? Join our platform and get access to more clients. Our
              cleaners get paid more because we cut out the middleman. You're in control of your schedule and earnings.
            </p>
            <Button size="lg">Become a Limpiador</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative overflow-hidden rounded-full">
              <Image
                src="/earning.png"
                alt="Cleaning professionals at work"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

