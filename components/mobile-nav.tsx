"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, ExternalLink } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/gift-registry", label: "Gift Registry" },
    { href: "/accommodation", label: "Accommodation" },
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
    <div className="md:hidden flex items-center">
      {/* RSVP Button for mobile - shown next to hamburger menu */}
      <Button
        asChild
        className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-1 rounded-full shadow-md hover:shadow-lg transition-all duration-300 mr-3 text-sm"
        size="sm"
      >
        <a
          href="https://tally.so/r/w29MBe"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1"
        >
          RSVP <ExternalLink className="h-3 w-3 ml-1" />
        </a>
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <div className="flex flex-col space-y-4 mt-8">
            <div className="text-2xl font-serif text-amber-900 mb-8 text-center">Diana & Victor</div>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg transition-colors py-2 px-4 rounded-lg ${
                  isActive(item.href)
                    ? "text-amber-600 bg-amber-50 font-semibold border-l-4 border-amber-600"
                    : "text-amber-800 hover:text-amber-600 hover:bg-amber-50"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* RSVP Button in mobile menu */}
            <div className="pt-4 mt-4 border-t border-amber-100">
              <Button
                asChild
                className="bg-amber-600 hover:bg-amber-700 text-white font-medium w-full py-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <a
                  href="https://tally.so/r/w29MBe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                  onClick={() => setOpen(false)}
                >
                  RSVP Now <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
