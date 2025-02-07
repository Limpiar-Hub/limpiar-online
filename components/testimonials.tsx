"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "A great service that has helped me keep my home clean and organized. The cleaners are professional and thorough.",
    author: "Sarah Johnson",
    avatar: "/placeholder.svg",
  },
  {
    quote: "Always on time and does an amazing job. Especially working around my busy schedule.",
    author: "Kristin Watson",
    avatar: "/placeholder.svg",
  },
  {
    quote: "Looking forward to my next clean. Very professional and the eco-friendly products are a huge plus.",
    author: "Albert Flores",
    avatar: "/placeholder.svg",
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

export function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl font-bold">What our Customers are Saying</h2>
          <p className="text-muted-foreground">We support 50,000+ satisfied customers in our network</p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full">
                <CardContent className="pt-6 space-y-4">
                  <Quote className="h-8 w-8 text-primary" />
                  <p className="text-muted-foreground">{testimonial.quote}</p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-12">
          <Button size="lg">See All</Button>
        </div>
      </div>
    </section>
  )
}

