import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gift, ExternalLink, Heart, MapPin, Phone, Mail, Home } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function GiftRegistryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-amber-100 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Gift className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif text-amber-900 mb-6">Gift Registry</h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift,
              we've created registries at our favorite stores and a honeymoon fund to help us start our new journey
              together.
            </p>
          </div>
        </div>
      </section>

      {/* Store Registries */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center text-amber-900 mb-12">Our Store Registries</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Game Stores */}
            <Card className="bg-white shadow-lg border-amber-200 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl font-serif text-amber-900">Game Stores</CardTitle>
                <p className="text-gray-600">Kitchen Essentials & Dining</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-sm">
                  Find beautiful kitchen appliances, cookware, and dining sets to help us create memorable meals
                  together.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-amber-800">Featured Items:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Stand mixer and kitchen appliances</li>
                    <li>• Cookware and bakeware sets</li>
                    <li>• Dinnerware and serving pieces</li>
                    <li>• Small kitchen gadgets</li>
                  </ul>
                </div>
                <Button asChild className="w-full bg-orange-600 hover:bg-red-700">
                  <Link href="https://www.game.co.za" target="_blank" rel="noopener noreferrer">
                    View Registry <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Makro */}
            <Card className="bg-white shadow-lg border-amber-200 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl font-serif text-amber-900">Makro</CardTitle>
                <p className="text-gray-600">Home Furnishings & Decor</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-sm">
                  Modern furniture and home decor items to help us create our perfect living space together.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-amber-800">Featured Items:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Living room furniture</li>
                    <li>• Bedroom essentials</li>
                    <li>• Home decor and artwork</li>
                    <li>• Storage solutions</li>
                  </ul>
                </div>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="https://www.makro.co.za" target="_blank" rel="noopener noreferrer">
                    View Registry <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pick n Pay */}
            <Card className="bg-white shadow-lg border-amber-200 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl font-serif text-amber-900">Pick n Pay</CardTitle>
                <p className="text-gray-600">Everyday Essentials</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-sm">
                  Practical everyday items and household essentials for our new home together.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-amber-800">Featured Items:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Household cleaning supplies</li>
                    <li>• Bath and body essentials</li>
                    <li>• Basic home goods</li>
                    <li>• Pantry staples</li>
                  </ul>
                </div>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="https://www.pnp.co.za" target="_blank" rel="noopener noreferrer">
                    View Registry <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Takealot */}
            <Card className="bg-white shadow-lg border-amber-200 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl font-serif text-amber-900">Takealot</CardTitle>
                <p className="text-gray-600">Tech & Lifestyle</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-sm">
                  Technology, gadgets, and lifestyle items to enhance our daily life and entertainment.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-amber-800">Featured Items:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Electronics and gadgets</li>
                    <li>• Home entertainment systems</li>
                    <li>• Smart home devices</li>
                    <li>• Books and games</li>
                  </ul>
                </div>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="https://www.takealot.com" target="_blank" rel="noopener noreferrer">
                    View Registry <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Honeymoon Fund */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heart className="w-16 h-16 text-amber-600 mx-auto mb-6" />
              <h2 className="text-3xl font-serif text-amber-900 mb-4">Honeymoon Fund</h2>
              <p className="text-xl text-gray-700">Help us create magical memories in Mauritius & Rodrigues Island</p>
            </div>

            <Card className="bg-white shadow-lg border-amber-200 mb-8">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Image
                      src="https://blog.pentravel.co.za/wp-content/uploads/2022/06/NORTH.jpg"
                      alt="Beautiful Mauritius beach destination"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif text-amber-900">Our Dream Destination</h3>
                    <p className="text-gray-700">
                      We're planning a romantic honeymoon to the beautiful islands of Mauritius and Rodrigues. Your
                      contribution will help us create unforgettable memories as we begin our married life together.
                    </p>
                    <Button asChild className="bg-amber-600 hover:bg-amber-700">
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        Contribute to Honeymoon <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Honeymoon Experiences */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white shadow-md border-amber-200">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-amber-800 mb-2">Romantic Sunset Dinner</h4>
                  <p className="text-2xl font-bold text-amber-600 mb-2">R2,500</p>
                  <p className="text-sm text-gray-600">Private beachside dining experience</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md border-amber-200">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-amber-800 mb-2">Catamaran Cruise</h4>
                  <p className="text-2xl font-bold text-amber-600 mb-2">R3,200</p>
                  <p className="text-sm text-gray-600">Full day sailing adventure</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md border-amber-200">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-amber-800 mb-2">Couples Spa Day</h4>
                  <p className="text-2xl font-bold text-amber-600 mb-2">R4,500</p>
                  <p className="text-sm text-gray-600">Relaxing spa treatments for two</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md border-amber-200">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-amber-800 mb-2">Island Hopping Adventure</h4>
                  <p className="text-2xl font-bold text-amber-600 mb-2">R6,000</p>
                  <p className="text-sm text-gray-600">Explore multiple islands</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md border-amber-200">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-amber-800 mb-2">Underwater Sea Walk</h4>
                  <p className="text-2xl font-bold text-amber-600 mb-2">R2,800</p>
                  <p className="text-sm text-gray-600">Unique underwater experience</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md border-amber-200">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-amber-800 mb-2">Any Amount</h4>
                  <p className="text-2xl font-bold text-amber-600 mb-2">R???</p>
                  <p className="text-sm text-gray-600">Every contribution is appreciated</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Registry Guidelines */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-center text-amber-900 mb-12">Registry Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif text-amber-800 mb-4">Gift Preferences</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• We appreciate gifts from our registries, but any thoughtful gift is welcome</li>
                    <li>• Traditional South African items and cultural pieces are especially meaningful</li>
                    <li>• Handmade or personalized gifts hold special value to us</li>
                    <li>• If you prefer to give cash, it will go toward our new home</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif text-amber-800 mb-4">Delivery Information</h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start gap-2">
                      <Home className="w-5 h-5 text-amber-600 mt-1" />
                      <div>
                        <p className="font-semibold">Home Address:</p>
                        <p className="text-sm">
                         589 Bach Street,
                          <br />
                          Constantia Park,
                          <br />
                          Pretoria, 0181
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-amber-600 mt-1" />
                      <div>
                        <p className="font-semibold">Wedding Reception:</p>
                        <p className="text-sm">Gifts can also be brought to the reception venue</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Message */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Card className="bg-white shadow-lg border-amber-200">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-amber-600 mx-auto mb-6" />
                <h2 className="text-2xl font-serif text-amber-900 mb-4">From Our Hearts</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We are overwhelmed by the love and support from our family and friends. Your presence at our wedding
                  is truly the greatest gift we could ask for. If you choose to honor us with a gift, know that it will
                  be treasured as we build our life together.
                </p>
                <p className="text-amber-800 font-semibold mb-6">
                  Thank you notes will be sent within three months of our wedding day.
                </p>
                <div className="space-y-2 text-gray-600">
                  <p className="font-semibold">Questions about our registry?</p>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      <span>weddingdianavictor@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      <span>+27 79 246 8279</span>
                    </div>
                  </div>
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
