import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Clock, MapPin, Gift, Users, Camera, Music, Utensils } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-amber-100 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <HelpCircle className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif text-amber-900 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We've compiled answers to the most common questions about our wedding day. If you don't find what you're
              looking for, please don't hesitate to contact us!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {/* General Questions */}
              <Card className="border-amber-200">
                <AccordionItem value="item-1" className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-amber-600" />
                      <span className="text-left font-serif text-amber-900">What time should I arrive?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700">
                    Please arrive at the Sacred Heart Cathedral by 12:00 PM for the ceremony, which begins promptly at
                    12:30 PM. For the reception at De Harte Wedding Venue, please arrive by 5:00 PM for cocktails, with
                    dinner service beginning at 6:00 PM.
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card className="border-amber-200">
                <AccordionItem value="item-2" className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-amber-600" />
                      <span className="text-left font-serif text-amber-900">Where can I park?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700">
                    Free parking is available at both venues. The Sacred Heart Cathedral has a parking lot adjacent to
                    the church. De Harte Wedding Venue offers ample parking on-site. Valet parking will also be
                    available at the reception venue.
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card className="border-amber-200">
                <AccordionItem value="item-3" className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-amber-600" />
                      <span className="text-left font-serif text-amber-900">Can I bring a plus-one?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700">
                    We've planned our guest list carefully due to venue capacity. If your invitation includes a
                    plus-one, it will be clearly indicated on your invitation. Please let us know when you RSVP if
                    you'll be bringing a guest.
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card className="border-amber-200">
                <AccordionItem value="item-4" className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Gift className="w-5 h-5 text-amber-600" />
                      <span className="text-left font-serif text-amber-900">What about wedding gifts?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700">
                    Your presence is the greatest gift! However, if you'd like to give something, we've registered at
                    several stores and have a honeymoon fund. You can find all the details on our Gift Registry page.
                    Gifts can be sent to our home address or brought to the reception.
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card className="border-amber-200">
                <AccordionItem value="item-5" className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Utensils className="w-5 h-5 text-amber-600" />
                      <span className="text-left font-serif text-amber-900">What food will be served?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700">
                    We'll be serving a delicious three-course dinner featuring both South African and international
                    cuisine. Vegetarian, vegan, and gluten-free options will be available. Please let us know about any
                    dietary restrictions when you RSVP so we can accommodate your needs.
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card className="border-amber-200">
                <AccordionItem value="item-6" className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Music className="w-5 h-5 text-amber-600" />
                      <span className="text-left font-serif text-amber-900">Will there be dancing?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700">
                    We'll have a DJ playing a mix of contemporary hits, classic favorites, and South African music. The
                    dance floor will be open after dinner, and we encourage everyone to join us for a celebration. Feel
                    free to request songs when you RSVP!
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card className="border-amber-200">
                <AccordionItem value="item-7" className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Camera className="w-5 h-5 text-amber-600" />
                      <span className="text-left font-serif text-amber-900">
                        Can I take photos during the ceremony?
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700">
                    We'd love for you to capture memories! Please feel free to take photos during the reception. During
                    the ceremony, we ask that you keep phone cameras silent and avoid using flash photography out of
                    respect for the sacred setting. Our professional photographer will capture all the special moments.
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card className="border-amber-200">
                <AccordionItem value="item-8" className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-amber-600" />
                      <span className="text-left font-serif text-amber-900">
                        Is transportation provided between venues?
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700">
                    There will be a break between the ceremony and reception for photos and venue setup. Guests staying
                    at the Sheraton Pretoria Hotel can take advantage of complimentary shuttle service. For other
                    guests, we recommend using Uber, Bolt, or the taxi services available through your hotel.
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card className="border-amber-200">
                <AccordionItem value="item-9" className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-amber-600" />
                      <span className="text-left font-serif text-amber-900">Are children welcome?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700">
                    We love children and welcome them at both the ceremony and reception! We'll have some kid-friendly
                    meal options available. If you're traveling with little ones, please let us know when you RSVP so we
                    can ensure we have appropriate seating arrangements.
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card className="border-amber-200">
                <AccordionItem value="item-10" className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-amber-600" />
                      <span className="text-left font-serif text-amber-900">What time will the reception end?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700">
                    The reception will run until approximately 11:00 PM. We'll have a last dance around 10:45 PM,
                    followed by our grand exit. The venue will remain open for a short time afterward for guests to
                    collect personal items and say final goodbyes.
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card className="border-amber-200">
                <AccordionItem value="item-11" className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-amber-600" />
                      <span className="text-left font-serif text-amber-900">What if it rains?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700">
                    December is summer in South Africa, and while afternoon thundershowers are possible, both venues are
                    fully covered. The ceremony will be held inside the cathedral, and the reception venue has both
                    indoor and covered outdoor areas, so we're prepared for any weather!
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card className="border-amber-200">
                <AccordionItem value="item-12" className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-amber-600" />
                      <span className="text-left font-serif text-amber-900">
                        Who should I contact with other questions?
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700">
                    For any questions not covered here, please feel free to reach out to us directly:
                    <br />• Email: wedding@dianaandvictor.com
                    <br />• Phone: +27 12 345 6789
                    <br />
                    We're happy to help with any concerns or special requests you might have!
                  </AccordionContent>
                </AccordionItem>
              </Card>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Card */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white shadow-lg border-amber-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif text-amber-900">Still Have Questions?</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-700">
                  We're here to help! Don't hesitate to reach out if you need any additional information or have special
                  requests for our wedding day.
                </p>
                <div className="space-y-2 text-amber-800">
                  <p>
                    <strong>Email:</strong> wedding@dianaandvictor.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +27 12 345 6789
                  </p>
                </div>
                <p className="text-sm text-gray-600">We typically respond to messages within 24 hours.</p>
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
