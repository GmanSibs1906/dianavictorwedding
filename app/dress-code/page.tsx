import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Crown, Palette, Info } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function DressCodePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-amber-50">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content text-center">
            <Crown className="w-16 h-16 text-amber-600 mx-auto mb-8" />
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
        <span>Dress Code</span>
      </div>

      {/* Simplified Dress Code */}
      <section className="py-24 bg-white">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content">
            <div className="card-editorial p-12 text-center max-w-3xl mx-auto">
              <Crown className="w-16 h-16 text-amber-600 mx-auto mb-8" />
              <h3 className="text-4xl font-editorial text-amber-900 mb-8 tracking-wide">Formal / Black Tie</h3>
              
              <p className="text-xl text-gray-700 font-cormorant leading-relaxed">
                We invite you to join us in elegant formal attire. Think sophisticated evening wear that reflects the significance and joy of our celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Divider */}
      <div className="editorial-divider">
        <span>Color Harmony</span>
      </div>

      {/* Style Inspiration Section with Our Photos */}
      {/* Color Harmony Section */}
      <section className="py-24 bg-amber-50">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content">
            <div className="card-editorial p-12 text-center max-w-3xl mx-auto">
              <Palette className="w-16 h-16 text-amber-600 mx-auto mb-8" />
              <h3 className="text-4xl font-editorial text-amber-900 mb-8 tracking-wide">A Note About Colors</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl font-editorial text-amber-800 mb-4 tracking-wide">Recommended Colors</h4>
                  <p className="text-xl text-gray-700 font-cormorant">Shades of green and tan beautifully complement our celebration</p>
                </div>

                <div className="border-t border-amber-200 pt-8">
                  <h4 className="text-2xl font-editorial text-amber-800 mb-4 tracking-wide">Please Kindly Avoid</h4>
                  <p className="text-xl text-gray-700 font-cormorant">White, ivory, or cream (reserved for the bride)</p>
                </div>

                <div className="border-t border-amber-200 pt-8">
                  <p className="text-xl text-gray-700 font-cormorant leading-relaxed italic">
                    While our wedding colors are green, this is absolutely not a requirement. Please wear whatever makes you feel happy and confident!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Editorial Divider */}
      {/* <div className="editorial-divider">
        <span>Style Inspiration</span>
      </div> */}

      {/* Style Inspiration */}
      {/* <section className="py-24 bg-white">
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
      </section> */}

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
              <div className="grid md:grid-cols-1 gap-12">
                {/* <div> */}
                  {/* <h4 className="font-semibold text-amber-800 mb-6 font-cormorant text-lg uppercase tracking-wider">Please Avoid:</h4> */}
                  {/* <ul className="text-gray-700 space-y-3 font-cormorant text-lg"> */}
                    {/* <li>• White, ivory, or cream </li> */}
                    {/* <li>• Overly casual attire (jeans, sneakers, t-shirts)</li> */}
                    {/* <li>• Extremely bright or neon colors</li> */}
                    {/* <li>• Revealing or inappropriate clothing for church</li> */}
                    {/* <li>• Flip-flops or beach sandals</li> */}
                  {/* </ul> */}
                {/* </div> */}
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
