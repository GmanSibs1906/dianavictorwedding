"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/gift-registry", label: "Gift Registry" },
    { href: "/accommodation", label: "Stay" },
    { href: "/dress-code", label: "Dress Code" },
    { href: "/faq", label: "FAQ" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-amber-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-serif text-amber-900 hover:text-amber-700 transition-colors">
            Diana & Victor
          </Link>
          <div className="hidden md:flex items-center">
            <div className="flex space-x-8 mr-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors ${
                    isActive(item.href)
                      ? "text-amber-600 font-semibold border-b-2 border-amber-600 pb-1"
                      : "text-amber-800 hover:text-amber-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Button
              asChild
              className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <a
                href="https://tally.so/r/wedding-rsvp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                RSVP <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </Button>
          </div>
          <MobileNav />
        </div>
      </div>
    </nav>
  )
}
