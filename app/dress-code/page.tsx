import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shirt, Sun, Moon, Palette, Info } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function DressCodePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-amber-50">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content text-center">
            <Shirt className="w-16 h-16 text-amber-600 mx-auto mb-8" />
            <h1 className="text-6xl md:text-8xl font-editorial text-amber-900 mb-8 tracking-wide">Dress Code</h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-cormorant">
              We want you to feel comfortable and look your best as we celebrate together. Here's our guide to help you
              choose the perfect outfit for our special day.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Divider */}
      <div className="editorial-divider">
        <span>Attire Guidelines</span>
      </div>

      {/* Dress Code Guidelines */}
      <section className="py-24 bg-white">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Ceremony Attire */}
              <div className="card-editorial p-10 text-center">
                <Sun className="w-12 h-12 text-amber-600 mx-auto mb-6" />
                <h3 className="text-3xl font-editorial text-amber-900 mb-4 tracking-wide">Ceremony Attire</h3>
                <p className="text-amber-600 font-cormorant text-lg font-semibold uppercase tracking-wider mb-8">12:00 PM - Sacred Heart Cathedral</p>
                <div className="space-y-6 text-left">
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-3 font-cormorant text-lg uppercase tracking-wider">For Ladies:</h4>
                    <ul className="text-gray-700 space-y-2 font-cormorant">
                      <li>• Formal or semi-formal dresses</li>                    
                      <li>• Elegant blouses with dress pants or skirts</li>
                      <li>• Comfortable heels or flats for walking</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-3 font-cormorant text-lg uppercase tracking-wider">For Gentlemen:</h4>
                    <ul className="text-gray-700 space-y-2 font-cormorant">
                      <li>• Suits or blazers with dress pants</li>
                      <li>• Dress shirts with ties recommended</li>
                      <li>• Dark or neutral colors preferred</li>
                      <li>• Leather dress shoes</li>
                      <li>• Optional: pocket squares or cufflinks</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Reception Attire */}
              <div className="card-editorial p-10 text-center">
                <Moon className="w-12 h-12 text-amber-600 mx-auto mb-6" />
                <h3 className="text-3xl font-editorial text-amber-900 mb-4 tracking-wide">Reception Attire</h3>
                <p className="text-amber-600 font-cormorant text-lg font-semibold uppercase tracking-wider mb-8">6:00 PM - De Harte Wedding Venue</p>
                <div className="space-y-6 text-left">
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-3 font-cormorant text-lg uppercase tracking-wider">For Ladies:</h4>
                    <ul className="text-gray-700 space-y-2 font-cormorant">
                      <li>• Cocktail dresses</li>                      
                      <li>• Elegant evening wear</li>
                      <li>• Dancing-friendly shoes recommended</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-3 font-cormorant text-lg uppercase tracking-wider">For Gentlemen:</h4>
                    <ul className="text-gray-700 space-y-2 font-cormorant">
                      <li>• Suits or sport coats with dress pants</li>
                      <li>• Ties optional for evening celebration</li>
                      <li>• Dress shirts or elegant casual shirts</li>
                      <li>• Comfortable dress shoes for dancing</li>
                      <li>• Feel free to add personality with accessories</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Divider */}
      <div className="editorial-divider">
        <span>Our Color Palette</span>
      </div>

      {/* Color Palette */}
      <section className="py-24 g-amber-50">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content">
            <div className="text-center mb-16">
              <Palette className="w-16 h-16 text-green-600 mx-auto mb-8" />
              <h2 className="text-4xl font-editorial text-amber-900 mb-6 tracking-wide">Our Color Palette</h2>
              <p className="text-xl text-amber-600 font-cormorant">While not required, these colors complement our wedding theme beautifully</p>
            </div>

            <div className="card-editorial p-12 border-green-200">
              <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
                <div>
                  <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-4 shadow-md"></div>
                  <h4 className="font-semibold text-green-800 font-cormorant text-lg uppercase tracking-wider">Forest Green</h4>
                  <p className="text-green-600 font-cormorant">Our signature color</p>
                </div>
                <div>
                  <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 shadow-md border-2 border-green-200"></div>
                  <h4 className="font-semibold text-green-800 font-cormorant text-lg uppercase tracking-wider">Soft Sage</h4>
                  <p className="text-green-600 font-cormorant">Elegant neutral</p>
                </div>
                <div>
                  <div className="w-20 h-20 bg-green-900 rounded-full mx-auto mb-4 shadow-md"></div>
                  <h4 className="font-semibold text-green-800 font-cormorant text-lg uppercase tracking-wider">Deep Emerald</h4>
                  <p className="text-green-600 font-cormorant">Rich accent</p>
                </div>
              </div>

              <div className="text-center">
                <h4 className="font-semibold text-green-800 mb-6 font-cormorant text-lg uppercase tracking-wider">Complementary Colors</h4>
                <div className="flex justify-center gap-6 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-rose-300 rounded-full"></div>
                    <span className="text-green-600 font-cormorant">Blush Pink</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-200 rounded-full"></div>
                    <span className="text-green-600 font-cormorant">Soft Yellow</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-stone-400 rounded-full"></div>
                    <span className="text-green-600 font-cormorant">Warm Stone</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-800 rounded-full"></div>
                    <span className="text-green-600 font-cormorant">Navy Blue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Divider */}
      <div className="editorial-divider">
        <span>Style Inspiration</span>
      </div>

      {/* Style Inspiration */}
      <section className="py-24 bg-white">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card-editorial overflow-hidden hover:bg-amber-50 transition-all duration-300">
                <div className="relative h-80">
                  <Image
                    src="/Ceremony Elegance Modest and sophisticated.png"
                    alt="Elegant ceremony dress - modest and sophisticated attire for church wedding"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-semibold text-amber-800 font-cormorant text-lg uppercase tracking-wider">Ceremony Elegance</h4>
                  <p className="text-gray-600 font-cormorant">Modest and sophisticated</p>
                </div>
              </div>

              <div className="card-editorial overflow-hidden hover:bg-amber-50 transition-all duration-300">
                <div className="relative h-80">
                  <Image
                    src="/Reception Chic Cocktail party ready.webp"
                    alt="Reception cocktail dress - chic and party ready attire"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-semibold text-amber-800 font-cormorant text-lg uppercase tracking-wider">Reception Chic</h4>
                  <p className="text-gray-600 font-cormorant">Cocktail party ready</p>
                </div>
              </div>

              <div className="card-editorial overflow-hidden hover:bg-amber-50 transition-all duration-300">
                <div className="relative h-80">
                  <Image
                    src="/Timeless gentleman's style.webp"
                    alt="Formal suit style - timeless gentleman's attire"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-semibold text-amber-800 font-cormorant text-lg uppercase tracking-wider">Classic Formal</h4>
                  <p className="text-gray-600 font-cormorant">Timeless gentleman's style</p>
                </div>
              </div>

              <div className="card-editorial overflow-hidden hover:bg-amber-50 transition-all duration-300">
                <div className="relative h-80">
                  <Image
                    src="/Smart Casual Relaxed yet refined.webp"
                    alt="Smart casual look - relaxed yet refined attire"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-semibold text-amber-800 font-cormorant text-lg uppercase tracking-wider">Smart Casual</h4>
                  <p className="text-gray-600 font-cormorant">Relaxed yet refined</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Divider */}
      <div className="editorial-divider">
        <span>Important Notes</span>
      </div>

      {/* Important Notes */}
      <section className="py-24 bg-amber-50">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content">
            <div className="card-editorial p-12">
              <div className="text-center mb-12">
                <Info className="w-16 h-16 text-amber-600 mx-auto mb-8" />
                <h2 className="text-4xl font-editorial text-amber-900 mb-6 tracking-wide">Important Notes</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-semibold text-amber-800 mb-6 font-cormorant text-lg uppercase tracking-wider">Please Avoid:</h4>
                  <ul className="text-gray-700 space-y-3 font-cormorant text-lg">
                    <li>• White, ivory, or cream (reserved for the bride)</li>
                    <li>• Overly casual attire (jeans, sneakers, t-shirts)</li>
                    <li>• Extremely bright or neon colors</li>
                    {/* <li>• Revealing or inappropriate clothing for church</li> */}
                    {/* <li>• Flip-flops or beach sandals</li> */}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-800 mb-6 font-cormorant text-lg uppercase tracking-wider">Weather Considerations:</h4>
                  <ul className="text-gray-700 space-y-3 font-cormorant text-lg">
                    <li>• December is summer in South Africa</li>
                    <li>• Expected temperature: 20-28°C (68-82°F)</li>
                    <li>• Possible afternoon thundershowers</li>
                    <li>• Light jacket for air-conditioned venues</li>
                    <li>• Comfortable shoes for outdoor areas</li>
                  </ul>
                </div>
              </div>

              <div className="text-center pt-8 mt-8 border-t border-amber-200">
                <p className="text-gray-700 font-cormorant text-lg leading-relaxed">
                  <strong className="text-amber-900">Remember:</strong> The most important thing is that you're comfortable and feel confident.
                  We're just happy you're celebrating with us!
                </p>
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
