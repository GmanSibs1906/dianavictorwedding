import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Heart, Users, HelpCircle, Clock, Church, Gift } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-editorial relative overflow-hidden">
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
        </div>
        
        {/* Hero Content */}
        <div className=" md:hidden hero-content-editorial animate-fade-editorial">
          <h1 className="hero-title-editorial text-shadow-editorial">
            Diana & Victor
          </h1>
          <p className="hero-subtitle-editorial">
            An Editorial Wedding
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-lg mb-12">
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-none px-8 py-4 border border-white/20">
              <Calendar className="w-6 h-6" />
              <span className="font-cormorant font-light tracking-wide">December 4th, 2025</span>
            </div>
            <div className="hidden md:block text-white/60 font-editorial">•</div>
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-none px-8 py-4 border border-white/20">
              <MapPin className="w-6 h-6" />
              <span className="font-cormorant font-light tracking-wide">Pretoria, South Africa</span>
            </div>
          </div>
          <Button
            asChild
            className="amber-button text-lg px-12 py-4"
          >
            <a href="https://tally.so/r/w29MBe" target="_blank" rel="noopener noreferrer">RSVP</a>
          </Button>
        </div>
      </section>

      {/* Editorial Divider */}
      <div className="editorial-divider">
        <span>Our Story</span>
      </div>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-editorial">
                <Image
                  src="/page1.jpg"
                  alt="Diana and Victor"
                  width={600}
                  height={800}
                  className="w-full h-auto shadow-lg"
                />
              </div>
              <div className="space-y-8 animate-fade-editorial">
                <div>
                  <h3 className="text-3xl font-editorial text-amber-900 mb-4 tracking-wide">How We Met</h3>
                  <p className="text-gray-700 leading-relaxed font-cormorant text-lg">
                    It all began at the Parish of Maria Regina, not inside the church, but in the quiet familiarity of
                    the parish home, where Diana's late cousin was serving as a priest (Rest in Peace Fr. Muhau). That
                    is where Victor and Diana first crossed paths. There were no grand declarations or instant sparks,
                    just two people meeting under ordinary circumstances, unaware that life had something in store for
                    them.
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl font-editorial text-amber-900 mb-4 tracking-wide">From Friends to Forever</h3>
                  <p className="text-gray-700 leading-relaxed font-cormorant text-lg">
                    In the years that followed, they became friends. The kind of friends who laugh easily, talk often,
                    and genuinely enjoy each other's company. Their friendship was patient and steady, growing quietly
                    in the background of their busy lives. But time has a way of revealing what is meant to be. What
                    started as friendship slowly deepened into something more.
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl font-editorial text-amber-900 mb-4 tracking-wide">The Puppy That Stole Hearts</h3>
                  <p className="text-gray-700 leading-relaxed font-cormorant text-lg">
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

      {/* Editorial Divider */}
      <div className="editorial-divider">
        <span>The Celebration</span>
      </div>

      {/* Wedding Details */}
      <section className="py-24 bg-amber-50">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Ceremony Card */}
              <div className="card-editorial p-10 text-center">
                <Church className="w-16 h-16 text-amber-600 mx-auto mb-8" />
                <h3 className="text-3xl font-editorial text-amber-900 mb-4 tracking-wide">Holy Ceremony</h3>
                <div className="space-y-6 text-gray-700 font-cormorant">
                  <div className="flex items-center justify-center gap-3">
                    <Calendar className="w-5 h-5 text-amber-600" />
                    <span className="text-lg">Thursday, December 4th, 2025</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Clock className="w-5 h-5 text-amber-600" />
                    <span className="text-lg">12:00 PM</span>
                  </div>
                  <div className="flex items-start justify-center gap-3 mt-6">
                    <MapPin className="w-5 h-5 text-amber-600 mt-1" />
                    <div className="text-center">
                      <a href="https://maps.app.goo.gl/dtxa9xERuMPyzedH7" className="font-semibold text-amber-900 hover:text-amber-600 transition-colors">Sacred Heart Cathedral</a>
                      <p className="text-base">Nana Sita Street</p>
                      <p className="text-base">Pretoria Central, Pretoria, 0001</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reception Card */}
              <div className="card-editorial p-10 text-center">
                <Heart className="w-16 h-16 text-amber-600 mx-auto mb-8" />
                <h3 className="text-3xl font-editorial text-amber-900 mb-4 tracking-wide">Reception Celebration</h3>
                <div className="space-y-6 text-gray-700 font-cormorant">
                  <div className="flex items-center justify-center gap-3">
                    <Calendar className="w-5 h-5 text-amber-600" />
                    <span className="text-lg">Thursday, December 4th, 2025</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Clock className="w-5 h-5 text-amber-600" />
                    <span className="text-lg">Cocktail Hour: Starts at 16:00<br/>Reception: Starts at 17:00</span>
                  </div>
                  <div className="flex items-start justify-center gap-3 mt-6">
                    <MapPin className="w-5 h-5 text-amber-600 mt-1" />
                    <div className="text-center">
                      <p className="font-semibold text-amber-900">De Harte Wedding Venue</p>
                      <p className="text-base">206 Rentia Street</p>
                      <p className="text-base">Onderstepoort, Pretoria, 0110</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Family Introduction */}
            <div className="mt-20">
              <div className="card-editorial p-12">
                <h3 className="text-4xl font-editorial text-center text-amber-900 mb-12 tracking-wide">Our Families</h3>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="text-center">
                    <h4 className="text-2xl font-cormorant text-amber-600 mb-6">The Bride</h4>
                    <div className="space-y-3 text-gray-700 font-cormorant text-lg">
                      <p className="text-xl font-semibold text-amber-900">Zaka Diana Mawoko</p>
                      <p className="text-base uppercase tracking-widest text-gray-600">Daughter of</p>
                      <p>Prof. Kuhutama Philippe Mawoko</p>
                      <p>&</p>
                      <p>Mrs. Eugenie Mawoko</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-2xl font-cormorant text-amber-600 mb-6">The Groom</h4>
                    <div className="space-y-3 text-gray-700 font-cormorant text-lg">
                      <p className="text-xl font-semibold text-amber-900">Victor Sitanimezi</p>
                      <p className="text-base uppercase tracking-widest text-gray-600">Son of</p>
                      <p>Late Mr. Stanley Sitanimezi</p>
                      <p>&</p>
                      <p>Late Mrs. Margaret Sitanimezi</p>
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
        <span>Wedding Information</span>
      </div>

      {/* Quick Links */}
      <section className="py-24 bg-white">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content">
            <div className="grid md:grid-cols-4 gap-8">
              <Link href="/accommodation" className="card-editorial p-8 text-center group hover:bg-amber-50 transition-all duration-300">
                <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <span className="font-cormorant text-lg text-amber-900 uppercase tracking-wider">Accommodation</span>
              </Link>
              <Link href="/dress-code" className="card-editorial p-8 text-center group hover:bg-amber-50 transition-all duration-300">
                <Users className="w-12 h-12 text-amber-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <span className="font-cormorant text-lg text-amber-900 uppercase tracking-wider">Dress Code</span>
              </Link>
              <Link href="/faq" className="card-editorial p-8 text-center group hover:bg-amber-50 transition-all duration-300">
                <HelpCircle className="w-12 h-12 text-amber-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <span className="font-cormorant text-lg text-amber-900 uppercase tracking-wider">FAQ</span>
              </Link>
              <Link href="/gift-registry" className="card-editorial p-8 text-center group hover:bg-amber-50 transition-all duration-300">
                <Gift className="w-12 h-12 text-amber-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <span className="font-cormorant text-lg text-amber-900 uppercase tracking-wider">Gift Registry</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-amber-50">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-editorial text-amber-900 mb-12 tracking-wide">Questions?</h2>
            <div className="card-editorial p-12">
              <p className="text-gray-700 font-cormorant text-lg leading-relaxed mb-8">
                If you have any questions about our special day, please don't hesitate to reach out to us.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-amber-600 font-cormorant text-lg uppercase tracking-wider">Wedding Coordinator</p>
                  <p className="text-amber-900 font-cormorant text-lg">Juanita Beukes</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-600 font-cormorant text-lg uppercase tracking-wider">Email</p>
                  <p className="text-amber-900 font-cormorant text-lg">weddingdianavictor@gmail.com</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-600 font-cormorant text-lg uppercase tracking-wider">Phone</p>
                  <p className="text-amber-900 font-cormorant text-lg">+27 79 246 8279</p>
                </div>
              </div>
              <Button className="amber-button mt-8" asChild>
                <a href="https://tally.so/r/w29MBe" target="_blank" rel="noopener noreferrer">RSVP Now</a>
              </Button>
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
