import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { HelpCircle, Clock, MapPin, Phone, Mail, Car, Utensils, Music, Camera, Gift, Heart, Shirt } from "lucide-react"
import { Navigation } from "@/components/navigation"
import Image from "next/image"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-amber-50">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content text-center">
            <HelpCircle className="w-16 h-16 text-amber-600 mx-auto mb-8" />
            <h1 className="text-5xl md:text-7xl font-editorial text-amber-900 mb-8 tracking-wide">Helpful Information</h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-cormorant">
              Everything you need to know about our special day. If you have additional questions,
              please don't hesitate to reach out to us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Divider */}
      <div className="editorial-divider">
        <span>Frequently Asked Questions</span>
      </div>

      {/* FAQ Section - Part 1 */}
      <section className="py-24 bg-white">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content">
            <div className="card-editorial p-12">
              <Accordion type="single" collapsible className="w-full space-y-6">
                <AccordionItem value="item-1" className="border-amber-200">
                  <AccordionTrigger className="text-left font-cormorant text-lg font-semibold text-amber-900 uppercase tracking-wider hover:text-amber-600">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-amber-600" />
                      What time should I arrive for the ceremony?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 font-cormorant text-lg pt-4 pl-8">
                    Please arrive at Sacred Heart Cathedral by 12:00 PM. We recommend arriving a few minutes early to find parking and get seated comfortably.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-amber-200">
                  <AccordionTrigger className="text-left font-cormorant text-lg font-semibold text-amber-900 uppercase tracking-wider hover:text-amber-600">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-amber-600" />
                      What time should I arrive for the reception?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 font-cormorant text-lg pt-4 pl-8">
                    Please arrive at De Harte Wedding Venue by 4:00 PM for cocktails and canapés. The formal reception will begin at 5:00 PM.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-amber-200">
                  <AccordionTrigger className="text-left font-cormorant text-lg font-semibold text-amber-900 uppercase tracking-wider hover:text-amber-600">
                    <div className="flex items-center gap-3">
                      <Shirt className="w-5 h-5 text-amber-600" />
                      What is the dress code for the wedding?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 font-cormorant text-lg pt-4 pl-8">
                    The dress code is formal/black tie. We recommend elegant attire in shades of green and tan. 
                    Please avoid white, ivory, or cream colors. Your presence is the most important thing to us, so please dress in a way that makes you feel comfortable and confident.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-amber-200">
                  <AccordionTrigger className="text-left font-cormorant text-lg font-semibold text-amber-900 uppercase tracking-wider hover:text-amber-600">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-amber-600" />
                      Is there parking available at both venues?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 font-cormorant text-lg pt-4 pl-8">
                    Yes, parking is available both around and inside the church. De Harte venue has ample parking space.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-amber-200">
                  <AccordionTrigger className="text-left font-cormorant text-lg font-semibold text-amber-900 uppercase tracking-wider hover:text-amber-600">
                    <div className="flex items-center gap-3">
                      <Car className="w-5 h-5 text-amber-600" />
                      Will transportation be provided between venues?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 font-cormorant text-lg pt-4 pl-8">
                    Transportation will not be provided between the ceremony and reception venues. The venues are 
                    approximately 15 minutes apart by car. If you need help with transport, please contact us directly.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-amber-200">
                  <AccordionTrigger className="text-left font-cormorant text-lg font-semibold text-amber-900 uppercase tracking-wider hover:text-amber-600">
                    <div className="flex items-center gap-3">
                      <Utensils className="w-5 h-5 text-amber-600" />
                      What type of food will be served?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 font-cormorant text-lg pt-4 pl-8">
                    Our culinary selection features a blend of South African, Congolese, and Zambian cuisines, complemented by a variety of international options. We are also pleased to accommodate any dietary needs upon request.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border-amber-200">
                  <AccordionTrigger className="text-left font-cormorant text-lg font-semibold text-amber-900 uppercase tracking-wider hover:text-amber-600">
                    <div className="flex items-center gap-3">
                      <Gift className="w-5 h-5 text-amber-600" />
                      What about wedding gifts?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 font-cormorant text-lg pt-4 pl-8">
                    We have a gift registry and also welcome cash contributions. Your presence at our wedding is truly the greatest gift we could ask for, but any additional gifts you choose to give will be treasured as we build our life together.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border-amber-200">
                  <AccordionTrigger className="text-left font-cormorant text-lg font-semibold text-amber-900 uppercase tracking-wider hover:text-amber-600">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-amber-600" />
                      What time will the reception end?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 font-cormorant text-lg pt-4 pl-8">
                    The reception will conclude promptly at midnight.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="border-amber-200">
                  <AccordionTrigger className="text-left font-cormorant text-lg font-semibold text-amber-900 uppercase tracking-wider hover:text-amber-600">
                    <div className="flex items-center gap-3">
                      <Utensils className="w-5 h-5 text-amber-600" />
                      What to expect at the bar?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 font-cormorant text-lg pt-4 pl-8">
                    A bar will be available, offering complimentary soft drinks, juices, beer, and wines. Hard liquor will be available for purchase.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="border-amber-200">
                  <AccordionTrigger className="text-left font-cormorant text-lg font-semibold text-amber-900 uppercase tracking-wider hover:text-amber-600">
                    <div className="flex items-center gap-3">
                      <Heart className="w-5 h-5 text-amber-600" />
                      Are children welcome at the wedding?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 font-cormorant text-lg pt-4 pl-8">
                    Yes, children are welcome at both the ceremony and reception! We ask that parents ensure
                    their little ones are supervised during the ceremony. The reception venue has some space
                    where children can play if needed.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11" className="border-amber-200">
                  <AccordionTrigger className="text-left font-cormorant text-lg font-semibold text-amber-900 uppercase tracking-wider hover:text-amber-600">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-amber-600" />
                      What if I need to contact someone on the wedding day?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 font-cormorant text-lg pt-4 pl-8">
                    Our wedding coordinator, Juanita Beukes, will be available throughout the day for any
                    questions or concerns. You can reach her at +27 79 246 8279. For any last-minute changes
                    or emergencies, this is your best contact number.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Divider */}
      <div className="editorial-divider">
        <span>Creating Beautiful Memories</span>
      </div>

      {/* Beautiful Memory Section with Images */}
      <section className="py-24 bg-amber-50">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-editorial text-amber-900 mb-6 tracking-wide">Every Detail Matters</h2>
              <p className="text-xl text-gray-700 font-cormorant max-w-3xl mx-auto">
                Just as these precious moments show our attention to every beautiful detail, 
                we've thoughtfully planned every aspect of our wedding day for you
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Joyful Moment */}
              <div className="relative">
                <div className="card-editorial overflow-hidden group">
                  <div className="relative h-96 lg:h-[450px]">
                    <Image
                      src="/image8.jpg"
                      alt="Diana and Victor - Joyful Wedding Moment"
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <div className="backdrop-blur-sm bg-white/10 p-6 rounded-lg border border-white/20">
                        <h3 className="text-2xl font-editorial tracking-wide mb-3 text-shadow-editorial">Pure Celebration</h3>
                        <p className="text-base font-cormorant leading-relaxed text-shadow-editorial">
                          This is the kind of joy and celebration we want to share with all our loved ones. 
                          Every moment of our wedding day is designed to create memories that last forever.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Intimate Moment */}
              <div className="relative">
                <div className="card-editorial overflow-hidden group">
                  <div className="relative h-96 lg:h-[450px]">
                    <Image
                      src="/image9.jpg"
                      alt="Diana and Victor - Intimate Wedding Moment"
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <div className="backdrop-blur-sm bg-white/10 p-6 rounded-lg border border-white/20">
                        <h3 className="text-2xl font-editorial tracking-wide mb-3 text-shadow-editorial">Heartfelt Connection</h3>
                        <p className="text-base font-cormorant leading-relaxed text-shadow-editorial">
                          The quiet, tender moments are just as important as the grand celebrations. 
                          We hope our wedding day creates space for both joyful dancing and meaningful connections.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Promise Card */}
            <div className="card-editorial p-12 text-center bg-gradient-to-r from-white to-amber-50 border-2 border-amber-200">
              <div className="max-w-2xl mx-auto">
                <Heart className="w-12 h-12 text-amber-600 mx-auto mb-6" />
                <h3 className="text-3xl font-editorial text-amber-900 mb-6 tracking-wide">Our Promise to You</h3>
                <p className="text-lg font-cormorant text-gray-700 leading-relaxed mb-6">
                  We've planned every detail with love and care, from the ceremony music to the reception cuisine. 
                  Your comfort and joy are our priorities, and we can't wait to celebrate this milestone 
                  surrounded by everyone we hold dear.
                </p>
                <div className="w-24 h-px bg-amber-600 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Editorial Divider */}
      <div className="editorial-divider">
        <span>Still have Questions ?</span>
      </div>

      {/* Additional Info */}
      <section className="py-24 bg-amber-50">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content">
            {/* <div className="grid md:grid-cols-2 gap-12">
              <div className="card-editorial p-10">
                <h3 className="text-2xl font-editorial text-amber-900 mb-6 tracking-wide">Weather & Comfort</h3>
                <ul className="space-y-4 text-gray-700 font-cormorant text-lg">
                  <li>• December weather: 20-28°C (68-82°F)</li>
                  <li>• Both venues are air-conditioned</li>
                  <li>• Possible afternoon thundershowers</li>
                  <li>• Comfortable shoes recommended for dancing</li>
                  <li>• Light jacket suggested for evening</li>
                </ul>
              </div>

              <div className="card-editorial p-10">
                <h3 className="text-2xl font-editorial text-amber-900 mb-6 tracking-wide">Health & Safety</h3>
                <ul className="space-y-4 text-gray-700 font-cormorant text-lg">
                  <li>• Hand sanitizer will be available at both venues</li>
                  <li>• If you're feeling unwell, please stay home</li>
                  <li>• Both venues have first aid facilities</li>
                  <li>• Security will be present at the reception venue</li>
                  <li>• Designated driver services recommended</li>
                </ul>
              </div>
            </div> */}

            <div className="card-editorial p-12 mt-12 text-center">
              <h3 className="text-3xl font-editorial text-amber-900 mb-6 tracking-wide">Still Have Questions?</h3>
              <p className="text-gray-700 font-cormorant text-lg leading-relaxed mb-8">
                Don't hesitate to reach out if you need clarification on anything or have specific concerns
                about the wedding day. We want everyone to feel prepared and excited for our celebration!
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
