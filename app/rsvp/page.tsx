"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, ExternalLink } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function RSVPPage() {
  useEffect(() => {
    // Redirect after 2 seconds
    const timer = setTimeout(() => {
      window.location.href = "https://tally.so/r/w29MBe"
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-amber-100 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif text-amber-900 mb-6">RSVP</h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              You're being redirected to our RSVP form...
            </p>
          </div>
        </div>
      </section>

      {/* Redirect Card */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white shadow-lg border-amber-200">
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-serif text-amber-900">Please RSVP</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-gray-700">
                  We're excited to celebrate with you! Please fill out our RSVP form to let us know if you can join us.
                </p>
                <p className="text-sm text-gray-600">
                  You will be automatically redirected in a few seconds, or click the button below:
                </p>
                <Button
                  asChild
                  className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a
                    href="https://tally.so/r/w29MBe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Go to RSVP Form <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-serif mb-4">Diana & Victor</h3>
          <p className="text-amber-200 mb-4">December 4th, 2025 • Pretoria, South Africa</p>
          <p className="text-amber-300">We can't wait to celebrate with you!</p>
        </div>
      </footer>
    </div>
  )
}
