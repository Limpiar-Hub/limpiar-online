"use client"

import { motion } from "framer-motion"
import { Search, Calendar, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Search,
    title: "Looking for Cleaning Services?",
    description: "Need something cleaned? From houses to offices, we've got you covered.",
    action: "Get Started",
  },
  {
    icon: Calendar,
    title: "Book Based on Your Schedule",
    description: "Our cleaners schedule just when you need them. Pick your preferred time.",
    action: "Schedule a Cleaning",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Cleaning Products",
    description: "Shop green cleaning supplies, tools, and equipment. All environmentally certified.",
    action: "Shop Our Products",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Services() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-12"
        >
          Limpiar Online Services
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item}>
              <Card className="h-full">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    {service.action}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

