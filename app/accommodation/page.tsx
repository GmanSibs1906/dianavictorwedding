import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Star, Wifi, Car, Coffee, Utensils } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function AccommodationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-amber-50">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content text-center">
            <MapPin className="w-16 h-16 text-amber-600 mx-auto mb-8" />
            <h1 className="text-6xl md:text-8xl font-editorial text-amber-900 mb-8 tracking-wide">Where to Stay</h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-cormorant">
              We've curated these exceptional accommodations near our wedding venues. Each offers distinctive character 
              and superior service for our celebration.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Divider */}
      <div className="editorial-divider">
        <span>Recommended Accommodations</span>
      </div>

      {/* Recommended Hotels */}
      <section className="py-24 bg-white">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content space-y-16">
            {/* Morgenzon Estate */}
            <div className="card-editorial overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <Image
                    src="https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/299537195.jpg?k=23b988718438b8b1f1db861c84fc2f91512e87420a73940b2539f078fe0696a2&o="
                    alt="Morgenzon Estate - Guesthouse, Conferences and Wedding Venue"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-12">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-editorial text-amber-900 tracking-wide">Morgenzon Estate</h3>
                      <div className="flex items-center gap-1">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-amber-600 text-amber-600" />
                        ))}
                      </div>
                    </div>
                    <p className="text-amber-600 font-cormorant text-lg font-semibold uppercase tracking-wider">Guesthouse, Conferences & Wedding Venue • 15km from ceremony</p>
                  </div>
                  <div className="space-y-6">
                    <p className="text-gray-700 font-cormorant text-lg leading-relaxed">
                      A beautiful estate offering luxury accommodation with wedding venue facilities and comprehensive conference amenities in a serene setting.
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm text-gray-600 font-cormorant">
                      <div className="flex items-center gap-2">
                        <Wifi className="w-4 h-4" />
                        <span>Free WiFi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Car className="w-4 h-4" />
                        <span>Free Parking</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Coffee className="w-4 h-4" />
                        <span>Conference Facilities</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Utensils className="w-4 h-4" />
                        <span>Restaurant</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="font-semibold text-amber-900 font-cormorant text-lg">Contact for Rates</p>
                      <p className="text-sm text-gray-600 font-cormorant">Quote "Diana & Victor Wedding" when booking</p>
                      <div className="flex items-start gap-3 mt-4">
                        <MapPin className="w-4 h-4 text-amber-600 mt-1" />
                        <div className="font-cormorant text-gray-700">
                          <p className="text-sm">12 Airport Rd, Cynthia Vale AH</p>
                          <p className="text-sm">Pretoria, 0001</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild className="amber-button">
                        <Link href="tel:079 895 8324">
                          <Phone className="w-4 h-4 mr-2" />
                          079 895 8324
                        </Link>
                      </Button>
                      <Button asChild className="amber-button-outline">
                        <Link href="mailto:info@morgenzone-estate.co.za">
                          <Mail className="w-4 h-4 mr-2" />
                          Email Estate
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Villa San Giovanni Accommodation */}
            <div className="card-editorial overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <Image
                    src="https://www.hotelvillasangiovanni.com/wp-content/uploads/37316788.jpg"
                    alt="Villa San Giovanni Accommodation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-12">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-editorial text-amber-900 tracking-wide">Villa San Giovanni</h3>
                      <div className="flex items-center gap-1">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-amber-600 text-amber-600" />
                        ))}
                      </div>
                    </div>
                    <p className="text-amber-600 font-cormorant text-lg font-semibold uppercase tracking-wider">4-Star Hotel • 8km from reception venue</p>
                  </div>
                  <div className="space-y-6">
                    <p className="text-gray-700 font-cormorant text-lg leading-relaxed">
                      Elegant 4-star hotel offering luxury accommodation with modern amenities and sophisticated service in the heart of Onderstepoort.
                    </p>
                    <div className="flex flex-wrap gap-6 text-sm text-gray-600 font-cormorant">
                      <div className="flex items-center gap-2">
                        <Wifi className="w-4 h-4" />
                        <span>Free WiFi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Car className="w-4 h-4" />
                        <span>Secure Parking</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Coffee className="w-4 h-4" />
                        <span>Spa & Pool</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Utensils className="w-4 h-4" />
                        <span>Fine Dining</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="font-semibold text-amber-900 font-cormorant text-lg">Contact for Special Wedding Rates</p>
                      <p className="text-sm text-gray-600 font-cormorant">Quote "Diana & Victor Wedding" when booking</p>
                      <div className="flex items-start gap-3 mt-4">
                        <MapPin className="w-4 h-4 text-amber-600 mt-1" />
                        <div className="font-cormorant text-gray-700">
                          <p className="text-sm">122 Linvelt Rd, Onderstepoort</p>
                          <p className="text-sm">Pretoria, 0110</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild className="amber-button">
                        <Link href="tel:012 111 8888">
                          <Phone className="w-4 h-4 mr-2" />
                          012 111 8888
                        </Link>
                      </Button>
                      <Button asChild className="amber-button-outline">
                        <Link href="mailto:reservations@villasangiovanni.co.za">
                          <Mail className="w-4 h-4 mr-2" />
                          Email Hotel
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Editorial Divider */}
      <div className="editorial-divider">
        <span>Additional Information</span>
      </div>

      {/* Transportation & Additional Info */}
      <section className="py-24 bg-amber-50">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="card-editorial p-10">
                <h3 className="text-2xl font-editorial text-amber-900 mb-6 tracking-wide">Transportation</h3>
                <ul className="space-y-4 text-gray-700 font-cormorant text-lg">
                  <li>• Uber and Bolt services readily available throughout Pretoria</li>
                  <li>• Premium car rental services at OR Tambo International Airport</li>
                  <li>• Concierge taxi arrangements available through hotel services</li>
                </ul>
              </div>

              <div className="card-editorial p-10">
                <h3 className="text-2xl font-editorial text-amber-900 mb-6 tracking-wide">Booking Guidelines</h3>
                <ul className="space-y-4 text-gray-700 font-cormorant text-lg">
                  <li>• Reserve by November 1st to secure special wedding rates</li>
                  <li>• Reference "Diana & Victor Wedding" for exclusive group discounts</li>
                  <li>• Standard check-in: 3:00 PM | Check-out: 11:00 AM</li>
                  <li>• Contact us for personalized reservation assistance</li>
                </ul>
              </div>
            </div>

            <div className="card-editorial p-12 mt-12 text-center">
              <h3 className="text-3xl font-editorial text-amber-900 mb-6 tracking-wide">Accommodation Assistance</h3>
              <p className="text-gray-700 font-cormorant text-lg leading-relaxed mb-8">
                For personalized assistance with reservations or special accommodation requirements, 
                our wedding coordinator is available to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild className="amber-button">
                  <Link href="mailto:weddingdianavictor@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Link>
                </Button>
                <Button asChild className="amber-button-outline">
                  <Link href="tel:+27 79 246 8279">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-editorial py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-editorial mb-6 text-white tracking-wide">Diana & Victor</h3>
          <p className="text-amber-200 mb-4 font-cormorant text-lg tracking-wider uppercase">December 4th, 2025 • Pretoria, South Africa</p>
          <p className="text-amber-100 font-cormorant text-lg">We can't wait to celebrate with you!</p>
        </div>
      </footer>
    </div>
  )
}
