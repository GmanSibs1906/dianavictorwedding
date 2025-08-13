"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Heart, Users, HelpCircle, Clock, Church, Gift, ChevronDown, ChevronUp } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { useState } from "react"

export default function HomePage() {
  const [isStoryExpanded, setIsStoryExpanded] = useState(false)
  
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
        <div className=" mt-[50vh] hero-content-editorial animate-fade-editorial">
          <h1 className=" md:hidden hero-title-editorial text-shadow-editorial">
            Diana & Victor
          </h1>

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
            className=" md:hidden amber-button text-lg px-12 py-4"
          >
            <a href="https://tally.so/r/w29MBe" target="_blank" rel="noopener noreferrer">RSVP</a>
          </Button>
        </div>
      </section>

      {/* Wedding Details Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-editorial text-amber-900 mb-6 tracking-wide">Join Us in Celebration</h2>
            <div className="w-24 h-px bg-amber-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Ceremony Details */}
            <div className="card-editorial p-8 text-center bg-white">
              <Church className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-editorial text-amber-900 mb-4 tracking-wide">Holy Ceremony</h3>
              <div className="space-y-3 text-gray-700 font-cormorant text-lg">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <span>Thursday, December 4th, 2025</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <span>12:00 PM</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span>Sacred Heart Cathedral</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Cnr Bok Street<br/>
                  Pretoria Central, Pretoria, 0001
                </p>
                <a 
                  href="https://maps.google.com/?q=Sacred+Heart+Cathedral+Pretoria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors font-cormorant"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            {/* Reception Details */}
            <div className="card-editorial p-8 text-center bg-white">
              <Heart className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-editorial text-amber-900 mb-4 tracking-wide">Reception Celebration</h3>
              <div className="space-y-3 text-gray-700 font-cormorant text-lg">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <span>Thursday, December 4th, 2025</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <span>Cocktail Hour Starts at 4:00pm</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <span>Reception Starts at 5:00pm</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span>De Harte Wedding Venue</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  66 Botha Street<br/>
                  Onderstepoort, Pretoria, 0110
                </p>
                <a 
                  href="https://maps.google.com/?q=De+Harte+Wedding+Venue+Onderstepoort+Pretoria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors font-cormorant"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Bible Verse */}
          <div className="card-editorial p-12 text-center bg-white mt-12 max-w-4xl mx-auto">
            <div className="mb-6">
              <Heart className="w-12 h-12 text-amber-600 mx-auto" />
            </div>
            <blockquote className="text-2xl font-cormorant text-amber-900 italic leading-relaxed mb-6">
              "And so we know and rely on the love God has for us. God is love. Whoever lives in love lives in God, and God in them."
            </blockquote>
            <div className="w-24 h-px bg-amber-600 mx-auto mb-4"></div>
            <p className="text-amber-600 font-editorial tracking-wider uppercase text-sm">1 John 4:16</p>
          </div>
        </div>
      </section>

      {/* Our Story - Collapsible Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <button
            onClick={() => setIsStoryExpanded(!isStoryExpanded)}
            className="w-full flex items-center justify-between p-6 bg-amber-50 hover:bg-amber-100 transition-colors duration-300 border border-amber-200"
          >
            <h2 className="text-3xl font-editorial text-amber-900 tracking-wide">Our Story</h2>
            {isStoryExpanded ? (
              <ChevronUp className="w-8 h-8 text-amber-600" />
            ) : (
              <ChevronDown className="w-8 h-8 text-amber-600" />
            )}
          </button>
          
          {isStoryExpanded && (
            <div className="p-8 bg-white border border-amber-200 border-t-0 animate-fade-editorial">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-slide-editorial">
                  <Image
                    src="/page1.jpg"
                    alt="Diana and Victor"
                    width={600}
                    height={800}
                    className="w-full h-auto shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <div className="text-gray-700 leading-relaxed font-cormorant text-lg space-y-4">
                    <p>
                      It began at the Parish of Maria Regina,<br />
                      not within the church walls,<br />
                      but in the gentle quiet of the Parish home,<br />
                      where Diana's late cousin, Fr. Muhau (rest in peace),<br />
                      served with kindness and grace.<br />
                      There, Victor and Diana first met,<br />
                      two souls crossing paths<br />
                      under ordinary skies,<br />
                      unaware of the love that time would weave.
                    </p>
                    
                    <p>
                      Friendship came first,<br />
                      patient, steady,<br />
                      filled with easy laughter and long conversations,<br />
                      growing quietly in the backdrop of busy days.<br />
                      Then, slowly, it changed.<br />
                      What was friendship turned into something deeper,<br />
                      something lasting.
                    </p>
                    
                    <p>
                      And then came the puppy,<br />
                      a thoughtful gift from Victor to Diana,<br />
                      knowing her deep love for animals.<br />
                      A mischievous little heartbeat,<br />
                      bringing chaos, warmth,<br />
                      and joy that wove their hearts closer,<br />
                      while gently testing the limits of their patience.
                    </p>
                    
                    <p className="italic text-amber-800">
                      Theirs is a love built on friendship,<br />
                      rooted in understanding,<br />
                      and blooming with shared joy.<br />
                      A love that was always meant to be.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Editorial Divider */}
      <div className="editorial-divider">
        <span>Cherished Moments</span>
      </div>



      {/* Beautiful Moments Gallery */}
      <section className="py-24 bg-amber-50">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-editorial text-amber-900 mb-6 tracking-wide">Captured in Time</h2>
              <p className="text-xl text-gray-700 font-cormorant max-w-3xl mx-auto">
                Every picture tells a story, and these moments reflect the beautiful journey that brought us together
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-6 mb-16">
              {/* First Image - Artistic Layout */}
              <div className="lg:col-span-3">
                <div className="card-editorial overflow-hidden group hover:shadow-2xl transition-all duration-700">
                  <div className="relative h-80 lg:h-96 overflow-hidden">
                    <Image
                      src="/image4.jpg"
                      alt="Diana and Victor - Precious Moment"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/40 via-transparent to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                      <h3 className="text-white font-editorial text-2xl tracking-wide mb-2">Endless Laughter</h3>
                      <p className="text-white/90 font-cormorant">Sharing joy in every moment together</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Image - Complementary Layout */}
              <div className="lg:col-span-2">
                <div className="card-editorial overflow-hidden group hover:shadow-2xl transition-all duration-700">
                  <div className="relative h-80 lg:h-96 overflow-hidden">
                    <Image
                      src="/image5.jpg"
                      alt="Diana and Victor - Tender Embrace"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-bl from-amber-600/30 via-transparent to-amber-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                      <h3 className="text-white font-editorial text-xl tracking-wide mb-2">Pure Connection</h3>
                      <p className="text-white/90 font-cormorant">Hearts united as one</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Elegant Quote Section */}
            {/* <div className="card-editorial p-12 text-center bg-gradient-to-r from-amber-50 to-white border-2 border-amber-200">
              <div className="max-w-3xl mx-auto">
                <div className="mb-6">
                  <Heart className="w-12 h-12 text-amber-600 mx-auto" />
                </div>
                <blockquote className="text-2xl font-cormorant text-amber-900 italic leading-relaxed mb-6">
                  "And so we know and rely on the love God has for us. God is love. Whoever lives in love lives in God, and God in them."
                </blockquote>
                <div className="w-24 h-px bg-amber-600 mx-auto mb-4"></div>
                <p className="text-amber-600 font-editorial tracking-wider uppercase text-sm">1 John 4:16</p>
              </div>
            </div> */}
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
              {/* <div className="card-editorial p-10 text-center">
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
              </div> */}

              {/* Reception Card */}
              {/* <div className="card-editorial p-10 text-center">
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
                      <a href="https://maps.app.goo.gl/Bf317asHaH9Pei1V9" className="font-semibold text-amber-900 hover:text-amber-600 transition-colors">De Harte Wedding Venue</a>
                      <p className="text-base">206 Rentia Street</p>
                      <p className="text-base">Onderstepoort, Pretoria, 0110</p>
                    </div>
                  </div>
                </div>
              </div> */}
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
              <Link href="/accommodation" className="card-editorial py-8 text-center group hover:bg-amber-50 transition-all duration-300">
                <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <span className="font-cormorant text-lg text-amber-900 uppercase tracking-wider">Stay</span>
              </Link>
              <Link href="/dress-code" className="card-editorial p-8 text-center group hover:bg-amber-50 transition-all duration-300">
                <Users className="w-12 h-12 text-amber-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <span className="font-cormorant text-lg text-amber-900 uppercase tracking-wider">Dress Code</span>
              </Link>
              <Link href="/faq" className="card-editorial py-8 text-center group hover:bg-amber-50 transition-all duration-300">
                <HelpCircle className="w-12 h-12 text-amber-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <span className="font-cormorant text-lg text-amber-900 uppercase tracking-wider">Helpful Information</span>
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
