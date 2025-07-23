import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shirt, Sun, Moon, Palette, Info } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function DressCodePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-amber-100 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shirt className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif text-amber-900 mb-6">Dress Code</h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We want you to feel comfortable and look your best as we celebrate together. Here's our guide to help you
              choose the perfect outfit for our special day.
            </p>
          </div>
        </div>
      </section>

      {/* Dress Code Guidelines */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif text-center text-amber-900 mb-12">Attire Guidelines</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Ceremony Attire */}
              <Card className="bg-white shadow-lg border-amber-200">
                <CardHeader className="text-center">
                  <Sun className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl font-serif text-amber-900">Ceremony Attire</CardTitle>
                  <p className="text-amber-600">12:30 PM - Sacred Heart Cathedral</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">For Ladies:</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Formal or semi-formal dresses</li>
                      <li>• Modest necklines and covered shoulders (church setting)</li>
                      <li>• Knee-length or longer preferred</li>
                      <li>• Elegant blouses with dress pants or skirts</li>
                      <li>• Comfortable heels or flats for walking</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">For Gentlemen:</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Suits or blazers with dress pants</li>
                      <li>• Dress shirts with ties recommended</li>
                      <li>• Dark or neutral colors preferred</li>
                      <li>• Leather dress shoes</li>
                      <li>• Optional: pocket squares or cufflinks</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Reception Attire */}
              <Card className="bg-white shadow-lg border-amber-200">
                <CardHeader className="text-center">
                  <Moon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl font-serif text-amber-900">Reception Attire</CardTitle>
                  <p className="text-amber-600">6:00 PM - De Harte Wedding Venue</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">For Ladies:</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Cocktail dresses or elegant evening wear</li>
                      <li>• More relaxed necklines acceptable</li>
                      <li>• Midi or maxi dresses welcome</li>
                      <li>• Dressy separates or jumpsuits</li>
                      <li>• Dancing-friendly shoes recommended</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">For Gentlemen:</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Suits or sport coats with dress pants</li>
                      <li>• Ties optional for evening celebration</li>
                      <li>• Dress shirts or elegant casual shirts</li>
                      <li>• Comfortable dress shoes for dancing</li>
                      <li>• Feel free to add personality with accessories</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Palette className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h2 className="text-3xl font-serif text-amber-900 mb-4">Our Color Palette</h2>
              <p className="text-gray-700">While not required, these colors complement our wedding theme beautifully</p>
            </div>

            <Card className="bg-white shadow-lg border-amber-200">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="w-20 h-20 bg-amber-600 rounded-full mx-auto mb-3 shadow-md"></div>
                    <h4 className="font-semibold text-amber-800">Warm Amber</h4>
                    <p className="text-sm text-gray-600">Our signature color</p>
                  </div>
                  <div>
                    <div className="w-20 h-20 bg-amber-100 rounded-full mx-auto mb-3 shadow-md border-2 border-amber-200"></div>
                    <h4 className="font-semibold text-amber-800">Soft Cream</h4>
                    <p className="text-sm text-gray-600">Elegant neutral</p>
                  </div>
                  <div>
                    <div className="w-20 h-20 bg-amber-900 rounded-full mx-auto mb-3 shadow-md"></div>
                    <h4 className="font-semibold text-amber-800">Deep Bronze</h4>
                    <p className="text-sm text-gray-600">Rich accent</p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <h4 className="font-semibold text-amber-800 mb-3">Complementary Colors</h4>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-rose-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">Dusty Rose</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-sage-500 rounded-full" style={{ backgroundColor: "#87A96B" }}></div>
                      <span className="text-sm text-gray-600">Sage Green</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-slate-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">Charcoal Gray</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-900 rounded-full"></div>
                      <span className="text-sm text-gray-600">Navy Blue</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Style Inspiration */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif text-center text-amber-900 mb-12">Style Inspiration</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white shadow-md border-amber-200 overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/Ceremony Elegance Modest and sophisticated.png"
                    alt="Elegant ceremony dress - modest and sophisticated attire for church wedding"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold text-amber-800">Ceremony Elegance</h4>
                  <p className="text-sm text-gray-600">Modest and sophisticated</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md border-amber-200 overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/Reception Chic Cocktail party ready.webp"
                    alt="Reception cocktail dress - chic and party ready attire"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold text-amber-800">Reception Chic</h4>
                  <p className="text-sm text-gray-600">Cocktail party ready</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md border-amber-200 overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/Timeless gentleman's style.webp"
                    alt="Formal suit style - timeless gentleman's attire"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold text-amber-800">Classic Formal</h4>
                  <p className="text-sm text-gray-600">Timeless gentleman's style</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md border-amber-200 overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src="/Smart Casual Relaxed yet refined.webp"
                    alt="Smart casual look - relaxed yet refined attire"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold text-amber-800">Smart Casual</h4>
                  <p className="text-sm text-gray-600">Relaxed yet refined</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-lg border-amber-200">
              <CardHeader className="text-center">
                <Info className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-serif text-amber-900">Important Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-3">Please Avoid:</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• White, ivory, or cream (reserved for the bride)</li>
                      <li>• Overly casual attire (jeans, sneakers, t-shirts)</li>
                      <li>• Extremely bright or neon colors</li>
                      <li>• Revealing or inappropriate clothing for church</li>
                      <li>• Flip-flops or beach sandals</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-3">Weather Considerations:</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• December is summer in South Africa</li>
                      <li>• Expected temperature: 20-28°C (68-82°F)</li>
                      <li>• Possible afternoon thundershowers</li>
                      <li>• Light jacket for air-conditioned venues</li>
                      <li>• Comfortable shoes for outdoor areas</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center pt-4 border-t border-amber-200">
                  <p className="text-gray-700">
                    <strong>Remember:</strong> The most important thing is that you're comfortable and feel confident.
                    We're just happy you're celebrating with us!
                  </p>
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
