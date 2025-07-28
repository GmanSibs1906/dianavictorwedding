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
                    Please arrive at the Sacred Heart Cathedral by 12:00 PM for the ceremony. For the reception, kindly mention guests should arrive by 16:00 for cocktails and canapés, with the formal reception starting at 17:00.
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
                   Available both around and inside the church. De Harte venue has ample parking space.
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
                    We have established a gift registry, and cash contributions are also welcome.
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
                    Our culinary selection features a blend of South African, Congolese, and Zambian cuisines, complemented by a variety of international options. We are also pleased to accommodate any dietary needs upon request.
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
                    All guests are kindly requested to arrange their own transportation.
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
                    The reception will conclude promptly at midnight.
                  </AccordionContent>
                </AccordionItem>
              </Card>

              <Card className="border-amber-200">
                <AccordionItem value="item-11" className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Utensils className="w-5 h-5 text-amber-600" />
                      <span className="text-left font-serif text-amber-900">What to expect at the bar?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700">
                    A bar will be available, offering complimentary soft drinks, juices, beer, and wines. Hard liquor will be available for purchase.
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
                    <br />• Email: weddingdianavictor@gmail.com
                    <br />• Phone: +27 79 246 8279
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
