"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Check, Users, Leaf, Clock } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Get Connected to a Cleaner Near You",
    description:
      "Find your match instantly with our network of professional cleaners in your area. Our platform connects you with trusted, experienced cleaning professionals.",
  },
  {
    icon: Clock,
    title: "More Jobs Equals More Earnings",
    description:
      "Join our platform as a cleaner and increase your income. With our large customer base, you'll have access to more cleaning opportunities.",
  },
  {
    icon: Leaf,
    title: "Plant-Powered Cleaners",
    description:
      "We use eco-friendly, plant-based cleaning products that are safe for your home and the environment. Experience the power of natural cleaning solutions.",
  },
  {
    icon: Check,
    title: "Quality Guaranteed",
    description:
      "Every cleaning service is backed by our satisfaction guarantee. If you're not happy with the service, we'll make it right.",
  },
]

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

export function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-2"
        >
          <motion.div variants={item} className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Professional Cleaning Services at Your Fingertips
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experience the convenience of modern cleaning services with our innovative platform.
              </p>
            </div>
            <div className="grid gap-6">
              {features.map((feature) => (
                <motion.div key={feature.title} variants={item} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={item} className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/0 rounded-2xl" />
            <Image
              src="/logo.png"
              alt="Professional cleaning service"
              width={600}
              height={800}
              className="object-cover w-full h-full rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

