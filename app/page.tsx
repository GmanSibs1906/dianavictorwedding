import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Heart, Users, HelpCircle, Clock, Church, Gift } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Video Background - Desktop Only */}
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            className="hidden md:block absolute inset-0 w-full h-full object-cover"
            style={{ objectFit: "cover" }}
          >
            <source src="/dandv.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Image Background - Mobile Only */}
          <Image
            src="/mobile.jpg"
            alt="Diana and Victor"
            fill
            className="block md:hidden object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
        </div>
        
        {/* Hero Content - Mobile Only */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 block md:hidden">
          <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 md:p-12 border border-white/20">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 drop-shadow-lg">Diana & Victor</h1>
            <p className="text-xl md:text-3xl mb-8 font-light drop-shadow-md">are getting married</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg md:text-xl mb-8">
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <Calendar className="w-6 h-6" />
                <span>December 4th, 2025</span>
              </div>
              <div className="hidden md:block text-white/60">•</div>
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <MapPin className="w-6 h-6" />
                <span>Pretoria, South Africa</span>
              </div>
            </div>
            <Button
              asChild
              className="bg-amber-600/90 hover:bg-amber-700 text-white px-10 py-4 text-lg backdrop-blur-sm border border-amber-500/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="https://tally.so/r/w29MBe" target="_blank" rel="noopener noreferrer">RSVP Now</a>
            </Button>
          </div>
        </div>

        {/* Desktop Wedding Banner - Positioned at bottom of video */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 z-20">
          <div className="bg-gradient-to-r from-amber-900/95 via-amber-800/95 to-amber-900/95 backdrop-blur-md border-t border-amber-400/30">
            <div className="container mx-auto px-8 py-6">
              <div className="flex items-center justify-between">
                {/* Left: Names */}
                <div className="text-white">
                  <h1 className="text-4xl lg:text-5xl font-serif font-bold text-amber-100 mb-1">Diana & Victor</h1>
                  <p className="text-amber-200 text-lg font-light">are getting married</p>
                </div>
                
                {/* Center: Wedding Details */}
                <div className="flex items-center gap-8 text-white">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                    <Calendar className="w-5 h-5 text-amber-300" />
                    <div className="text-center">
                      <p className="text-sm text-amber-200">Wedding Date</p>
                      <p className="font-semibold">December 4th, 2025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                    <MapPin className="w-5 h-5 text-amber-300" />
                    <div className="text-center">
                      <p className="text-sm text-amber-200">Location</p>
                      <p className="font-semibold">Pretoria, South Africa</p>
                    </div>
                  </div>
                </div>
                
                {/* Right: RSVP Button */}
                <div>
                  <Button
                    asChild
                    className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-400/50"
                  >
                    <a href="https://tally.so/r/w29MBe" target="_blank" rel="noopener noreferrer">RSVP Now</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce md:hidden">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-center text-amber-900 mb-12">Our Love Story</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/page1.jpg"
                  alt="Diana and Victor"
                  width={600}
                  height={800}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif text-amber-800 mb-3">How We Met</h3>
                  <p className="text-gray-700 leading-relaxed">
                    It all began at the Parish of Maria Regina, not inside the church, but in the quiet familiarity of
                    the parish home, where Diana's late cousin was serving as a priest (Rest in Peace Fr. Muhau). That
                    is where Victor and Diana first crossed paths. There were no grand declarations or instant sparks,
                    just two people meeting under ordinary circumstances, unaware that life had something in store for
                    them.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-amber-800 mb-3">From Friends to Forever</h3>
                  <p className="text-gray-700 leading-relaxed">
                    In the years that followed, they became friends. The kind of friends who laugh easily, talk often,
                    and genuinely enjoy each other's company. Their friendship was patient and steady, growing quietly
                    in the background of their busy lives. But time has a way of revealing what is meant to be. What
                    started as friendship slowly deepened into something more.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-amber-800 mb-3">The Puppy That Stole Hearts</h3>
                  <p className="text-gray-700 leading-relaxed">
                    And then, there was the puppy. Victor, knowing Diana's love for dogs, surprised her with a
                    mischievous little one. That pup brought chaos and laughter into the house and quickly became a
                    beloved member of the family. Just like Victor did. Their story has always been about love built on
                    friendship, understanding, and shared joy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Details */}
      <section id="details" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center text-amber-900 mb-12">Wedding Details</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Ceremony Card */}
            <Card className="bg-white shadow-lg border-amber-200">
              <CardContent className="p-8 text-center">
                <Church className="w-16 h-16 text-amber-600 mx-auto mb-6" />
                <h3 className="text-2xl font-serif text-amber-900 mb-4">Holy Ceremony</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5 text-amber-600" />
                    <span>Wednesday, December 4th, 2025</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-5 h-5 text-amber-600" />
                    <span>12:30 PM (Arrival at 12:00 PM)</span>
                  </div>
                  <div className="flex items-start justify-center gap-2 mt-4">
                    <MapPin className="w-5 h-5 text-amber-600 mt-1" />
                    <div className="text-center">
                      <p className="font-semibold">Sacred Heart Cathedral</p>
                      <p className="text-sm">Nana Sita Street</p>
                      <p className="text-sm">Pretoria Central, Pretoria, 0001</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reception Card */}
            <Card className="bg-white shadow-lg border-amber-200">
              <CardContent className="p-8 text-center">
                <Heart className="w-16 h-16 text-amber-600 mx-auto mb-6" />
                <h3 className="text-2xl font-serif text-amber-900 mb-4">Reception Celebration</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5 text-amber-600" />
                    <span>Wednesday, December 4th, 2025</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-5 h-5 text-amber-600" />
                    <span>6:00 PM (Arrival at 5:00 PM)</span>
                  </div>
                  <div className="flex items-start justify-center gap-2 mt-4">
                    <MapPin className="w-5 h-5 text-amber-600 mt-1" />
                    <div className="text-center">
                      <p className="font-semibold">De Harte Wedding Venue</p>
                      <p className="text-sm">206 Rentia Street</p>
                      <p className="text-sm">Onderstepoort, Pretoria, 0110</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Family Introduction */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg border-amber-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-center text-amber-900 mb-8">Our Families</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <h4 className="text-xl font-serif text-amber-800 mb-4">The Bride</h4>
                    <div className="space-y-2 text-gray-700">
                      <p className="text-lg font-semibold">Zaka Diana Mawoko</p>
                      <p className="text-sm">Daughter of</p>
                      <p>Prof. Kuhutama Philippe Mawoko</p>
                      <p>&</p>
                      <p>Mrs. Eugenie Mawoko</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-serif text-amber-800 mb-4">The Groom</h4>
                    <div className="space-y-2 text-gray-700">
                      <p className="text-lg font-semibold">Victor Sitanimezi</p>
                      <p className="text-sm">Son of</p>
                      <p>Late Mr. Stanley Sitanimezi</p>
                      <p>&</p>
                      <p>Late Mrs. Margaret Sitanimezi</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-amber-900 mb-12">Wedding Information</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Button asChild variant="outline" className="h-20 border-amber-300 hover:bg-amber-50 bg-transparent">
              <Link href="/accommodation" className="flex flex-col items-center gap-2">
                <MapPin className="w-6 h-6" />
                <span>Accommodation</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 border-amber-300 hover:bg-amber-50 bg-transparent">
              <Link href="/dress-code" className="flex flex-col items-center gap-2">
                <Users className="w-6 h-6" />
                <span>Dress Code</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 border-amber-300 hover:bg-amber-50 bg-transparent">
              <Link href="/faq" className="flex flex-col items-center gap-2">
                <HelpCircle className="w-6 h-6" />
                <span>FAQ</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 border-amber-300 hover:bg-amber-50 bg-transparent">
              <Link href="/gift-registry" className="flex flex-col items-center gap-2">
                <Gift className="w-6 h-6" />
                <span>Gift Registry</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-amber-900 mb-8">Questions?</h2>
            <Card className="bg-white shadow-lg border-amber-200">
              <CardContent className="p-8">
                <p className="text-gray-700 mb-6">
                  If you have any questions about our special day, please don't hesitate to reach out to us.
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-amber-800">Wedding Coordinators</p>
                    <p className="text-gray-700">Diana & Victor</p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800">Email</p>
                    <p className="text-gray-700">wedding@dianaandvictor.com</p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800">Phone</p>
                    <p className="text-gray-700">+27 12 345 6789</p>
                  </div>
                </div>
                <Button className="mt-6 bg-amber-600 hover:bg-amber-700" asChild>
                  <a href="https://tally.so/r/w29MBe" target="_blank" rel="noopener noreferrer">RSVP Now</a>
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
