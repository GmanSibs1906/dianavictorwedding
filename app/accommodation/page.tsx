import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Star, Wifi, Car, Coffee, Utensils } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function AccommodationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-amber-100 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif text-amber-900 mb-6">Where to Stay</h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We've arranged special rates at these wonderful hotels near our wedding venues. Book early to secure your
              preferred accommodation for our special day.
            </p>
          </div>
        </div>
      </section>

      {/* Recommended Hotels */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-amber-900 mb-12">Recommended Hotels</h2>
          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Hotel 1 */}
            <Card className="bg-white shadow-lg border-amber-200 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Luxury+Hotel+Pretoria"
                    alt="Sheraton Pretoria Hotel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl font-serif text-amber-900">Sheraton Pretoria Hotel</CardTitle>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-amber-600 font-semibold">5-Star Luxury • 2km from ceremony venue</p>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    <p className="text-gray-700">
                      Elegant luxury hotel in the heart of Pretoria with world-class amenities and exceptional service.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Wifi className="w-4 h-4" />
                        <span>Free WiFi</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Car className="w-4 h-4" />
                        <span>Valet Parking</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Coffee className="w-4 h-4" />
                        <span>Spa & Pool</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Utensils className="w-4 h-4" />
                        <span>Fine Dining</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold text-amber-800">Special Wedding Rate: R2,800/night</p>
                      <p className="text-sm text-gray-600">Quote "Diana & Victor Wedding" when booking</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild className="bg-amber-600 hover:bg-amber-700">
                        <Link href="tel:+27123456789">
                          <Phone className="w-4 h-4 mr-2" />
                          Call to Book
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="border-amber-300 bg-transparent">
                        <Link href="mailto:reservations@sheraton-pretoria.com">
                          <Mail className="w-4 h-4 mr-2" />
                          Email Hotel
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>

            {/* Hotel 2 */}
            <Card className="bg-white shadow-lg border-amber-200 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Boutique+Hotel+Pretoria"
                    alt="Menlyn Boutique Hotel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl font-serif text-amber-900">Menlyn Boutique Hotel</CardTitle>
                      <div className="flex items-center gap-1">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-amber-600 font-semibold">4-Star Boutique • 15km from reception venue</p>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    <p className="text-gray-700">
                      Modern boutique hotel with personalized service and contemporary design, perfect for wedding
                      guests.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Wifi className="w-4 h-4" />
                        <span>Free WiFi</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Car className="w-4 h-4" />
                        <span>Free Parking</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Coffee className="w-4 h-4" />
                        <span>Business Center</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Utensils className="w-4 h-4" />
                        <span>Restaurant</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold text-amber-800">Special Wedding Rate: R1,800/night</p>
                      <p className="text-sm text-gray-600">Quote "Diana & Victor Wedding" when booking</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild className="bg-amber-600 hover:bg-amber-700">
                        <Link href="tel:+27123456790">
                          <Phone className="w-4 h-4 mr-2" />
                          Call to Book
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="border-amber-300 bg-transparent">
                        <Link href="mailto:info@menlynboutique.com">
                          <Mail className="w-4 h-4 mr-2" />
                          Email Hotel
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>

            {/* Hotel 3 */}
            <Card className="bg-white shadow-lg border-amber-200 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Garden+Hotel+Pretoria"
                    alt="Pretoria Garden Hotel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl font-serif text-amber-900">Pretoria Garden Hotel</CardTitle>
                      <div className="flex items-center gap-1">
                        {[...Array(3)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-amber-600 font-semibold">3-Star Comfort • 8km from ceremony venue</p>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    <p className="text-gray-700">
                      Comfortable and affordable accommodation with beautiful gardens and friendly service.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Wifi className="w-4 h-4" />
                        <span>Free WiFi</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Car className="w-4 h-4" />
                        <span>Free Parking</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Coffee className="w-4 h-4" />
                        <span>Garden Pool</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Utensils className="w-4 h-4" />
                        <span>Breakfast</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold text-amber-800">Special Wedding Rate: R1,200/night</p>
                      <p className="text-sm text-gray-600">Quote "Diana & Victor Wedding" when booking</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild className="bg-amber-600 hover:bg-amber-700">
                        <Link href="tel:+27123456791">
                          <Phone className="w-4 h-4 mr-2" />
                          Call to Book
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="border-amber-300 bg-transparent">
                        <Link href="mailto:bookings@pretoriagarden.com">
                          <Mail className="w-4 h-4 mr-2" />
                          Email Hotel
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Transportation & Additional Info */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-center text-amber-900 mb-12">Additional Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg border-amber-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-serif text-amber-800 mb-4">Transportation</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Complimentary shuttle service available from Sheraton to ceremony venue</li>
                    <li>• Uber and Bolt are readily available throughout Pretoria</li>
                    <li>• Car rental services available at OR Tambo International Airport</li>
                    <li>• Taxi services can be arranged through your hotel concierge</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border-amber-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-serif text-amber-800 mb-4">Booking Tips</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Book by November 1st to secure special wedding rates</li>
                    <li>• Mention "Diana & Victor Wedding" for group discounts</li>
                    <li>• Check-in is typically 3:00 PM, check-out 11:00 AM</li>
                    <li>• Contact us if you need help with reservations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white shadow-lg border-amber-200 mt-8">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-serif text-amber-800 mb-4">Need Help with Accommodation?</h3>
                <p className="text-gray-700 mb-6">
                  If you need assistance with booking or have special requirements, please don't hesitate to contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-amber-600 hover:bg-amber-700">
                    <Link href="mailto:wedding@dianaandvictor.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Us
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-amber-300 bg-transparent">
                    <Link href="tel:+27123456789">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us
                    </Link>
                  </Button>
                </div>
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
