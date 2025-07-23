import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, MapPin, Church, Heart, Navigation, Phone, Mail } from "lucide-react"

export default function WhenWherePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-amber-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 text-amber-800 hover:text-amber-600">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="text-2xl font-serif text-amber-900">Sarah & Michael</div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif text-amber-900 mb-4">When & Where</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Join us as we celebrate our love story in beautiful Tuscany. Here are all the details you need for our
              special day.
            </p>
          </div>

          {/* Wedding Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-center text-amber-900 mb-8">Wedding Day Timeline</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Ceremony */}
              <Card className="shadow-lg border-amber-200">
                <CardHeader className="bg-amber-50">
                  <CardTitle className="text-2xl font-serif text-amber-900 text-center flex items-center justify-center gap-3">
                    <Church className="w-8 h-8" />
                    Holy Ceremony
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-6 h-6 text-amber-600" />
                      <div>
                        <p className="font-semibold">Date</p>
                        <p className="text-gray-700">Saturday, June 15th, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-6 h-6 text-amber-600" />
                      <div>
                        <p className="font-semibold">Time</p>
                        <p className="text-gray-700">4:00 PM (Please arrive by 3:45 PM)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-6 h-6 text-amber-600 mt-1" />
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-gray-700">Villa Serenity Gardens</p>
                        <p className="text-sm text-gray-600">Via dei Colli 123, 50125 Florence, Italy</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                    <p className="text-sm text-amber-800">
                      <strong>Note:</strong> The ceremony will be held outdoors in our beautiful garden setting. In case
                      of rain, we have a covered terrace as backup.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Reception */}
              <Card className="shadow-lg border-amber-200">
                <CardHeader className="bg-amber-50">
                  <CardTitle className="text-2xl font-serif text-amber-900 text-center flex items-center justify-center gap-3">
                    <Heart className="w-8 h-8" />
                    Reception Celebration
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-6 h-6 text-amber-600" />
                      <div>
                        <p className="font-semibold">Date</p>
                        <p className="text-gray-700">Saturday, June 15th, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-6 h-6 text-amber-600" />
                      <div>
                        <p className="font-semibold">Time</p>
                        <p className="text-gray-700">6:00 PM - 11:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-6 h-6 text-amber-600 mt-1" />
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-gray-700">Villa Serenity Ballroom</p>
                        <p className="text-sm text-gray-600">Same venue as ceremony</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                    <p className="text-sm text-amber-800">
                      <strong>Includes:</strong> Cocktail hour, three-course dinner, open bar, and dancing until 11:00
                      PM.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Venue Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-center text-amber-900 mb-8">About Our Venue</h2>
            <Card className="shadow-lg border-amber-200">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Villa Serenity"
                    alt="Villa Serenity venue"
                    fill
                    className="object-cover rounded-l-lg"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif text-amber-900 mb-4">Villa Serenity</h3>
                  <p className="text-gray-700 mb-6">
                    Nestled in the heart of Tuscany, Villa Serenity offers breathtaking views of rolling hills and
                    vineyards. This historic 16th-century villa has been lovingly restored to provide the perfect
                    setting for our special day.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-600" />
                      <span className="text-sm">Via dei Colli 123, 50125 Florence, Italy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-amber-600" />
                      <span className="text-sm">+39 055 123 4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-amber-600" />
                      <span className="text-sm">info@villaserenity.com</span>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Directions & Transportation */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-amber-900 flex items-center gap-2">
                  <Navigation className="w-5 h-5" />
                  Getting There
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">From Florence Airport</h4>
                    <p className="text-sm text-gray-700">
                      45-minute drive via A1 highway. Rental cars available at the airport, or we can arrange group
                      shuttle service.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">From Florence City Center</h4>
                    <p className="text-sm text-gray-700">
                      30-minute drive via Via dei Colli. Taxi service available, or join our group transportation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">Parking</h4>
                    <p className="text-sm text-gray-700">
                      Complimentary valet parking available for all wedding guests.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-amber-900">Important Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">Weather Backup Plan</h4>
                    <p className="text-sm text-gray-700">
                      Our ceremony will be held outdoors. In case of rain, we have beautiful covered terraces and an
                      indoor ballroom.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">Accessibility</h4>
                    <p className="text-sm text-gray-700">
                      The venue is wheelchair accessible. Please let us know if you need any special accommodations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">Photography</h4>
                    <p className="text-sm text-gray-700">
                      We're having an unplugged ceremony. Please put away cameras and phones during the ceremony.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Section */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-xl font-serif text-amber-900 text-center">Venue Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-96 bg-amber-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-xl font-serif text-amber-900 mb-2">Villa Serenity</h3>
                  <p className="text-gray-700 mb-4">Via dei Colli 123, 50125 Florence, Italy</p>
                  <p className="text-sm text-gray-500">Interactive map with detailed directions coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
