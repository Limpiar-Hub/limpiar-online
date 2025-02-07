import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

const footerLinks = {
  company: [
    { title: "About Us", href: "/about" },
    { title: "Careers", href: "/careers" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ],
  services: [
    { title: "Residential Cleaning", href: "/residential" },
    { title: "Commercial Cleaning", href: "/commercial" },
    { title: "Supplies", href: "/supplies" },
    { title: "Gift Cards", href: "/gift-cards" },
  ],
  support: [
    { title: "Help Center", href: "/help" },
    { title: "Safety", href: "/safety" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Privacy Policy", href: "/privacy" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:py-24">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-limpiar-online-2025-02-07-15_29_23-53YuMvMHaTNst2AnYPaNOeYTaLh8Iw.png"
                alt="Limpiar Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="font-bold">Limpiar</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Sustainable cleaning services for homes and businesses. Making clean spaces accessible to everyone.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Services</h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Support</h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.support.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Limpiar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

