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
    { href: "/gift-registry", label: "Registry" },
    { href: "/accommodation", label: "Stay" },
    { href: "/dress-code", label: "Attire" },
    { href: "/faq", label: "Helpful Information" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="nav-editorial fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-editorial text-3xl text-amber-900 hover:text-amber-600 transition-colors duration-300 tracking-wide">
            Diana & Victor
          </Link>
          <div className="hidden md:flex items-center">
            <div className="flex space-x-10 mr-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link-editorial transition-colors duration-300 ${
                    isActive(item.href)
                      ? "text-amber-600 active"
                      : "text-amber-900 hover:text-amber-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Button
              asChild
              className="amber-button"
            >
              <a
                href="https://tally.so/r/w29MBe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                RSVP <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <MobileNav />
        </div>
      </div>
    </nav>
  )
}
