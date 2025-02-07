"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function AppDownload() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="text-center mb-12"
        >
          <motion.h2 variants={item} className="text-3xl font-bold tracking-tight text-primary mb-4">
            Download Our Apps
          </motion.h2>
          <motion.p variants={item} className="text-muted-foreground max-w-2xl mx-auto">
            Services are easier to use through our dedicated apps. Download the app for your needs.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
        >
          {/* Book a Cleaning App */}
          <motion.div variants={item} className="text-center space-y-6">
            <Image
              src="/limpiador.svg"
              alt="Book a Cleaning App Icon"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-2xl font-bold text-primary">Book a Cleaning</h3>
            <div className="flex justify-center gap-4">
              <a href="#" className="transition-transform hover:scale-105">
                <Image
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={140}
                  height={42}
                  className="h-[42px] w-auto"
                />
              </a>
              <a href="#" className="transition-transform hover:scale-105">
                <Image
                  src="/google-play-badge.svg"
                  alt="Get it on Google Play"
                  width={156}
                  height={42}
                  className="h-[42px] w-auto"
                />
              </a>
            </div>
          </motion.div>

          {/* Become a Limpiador App */}
          <motion.div variants={item} className="text-center space-y-6">
            <Image
              src="/limpiador.svg"
              alt="Book a Cleaning App Icon"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-2xl font-bold text-primary">Book a Cleaning</h3>
            <div className="flex justify-center gap-4">
              <a href="#" className="transition-transform hover:scale-105">
                <Image
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={140}
                  height={42}
                  className="h-[42px] w-auto"
                />
              </a>
              <a href="#" className="transition-transform hover:scale-105">
                <Image
                  src="/google-play-badge.svg"
                  alt="Get it on Google Play"
                  width={156}
                  height={42}
                  className="h-[42px] w-auto"
                />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

