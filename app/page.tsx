import { Suspense } from "react"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { CleanerSection } from "@/components/cleaner-section"
import { EarningsSection } from "@/components/earnings-section"
import { PlantPowered } from "@/components/plant-powered"
import { AppDownload } from "@/components/app-download"
import { Testimonials } from "@/components/testimonials"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Suspense>
        <CleanerSection />
        <EarningsSection />
        <PlantPowered />
        <AppDownload />
        <Testimonials />
        <ContactForm />
      </Suspense>
    </>
  )
}

