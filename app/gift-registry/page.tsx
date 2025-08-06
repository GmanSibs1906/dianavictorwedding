"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gift, ExternalLink, Heart, MapPin, Phone, Mail, Home, CreditCard, Copy, CheckCircle, X, Banknote, DollarSign } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function GiftRegistryPage() {
  const [showBankingDetails, setShowBankingDetails] = useState(false)
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const bankingDetails = {
    accountName: "Diana Mawoko/Victor Sitanimexi",
    bankName: "Standard Bank",
    branch: "Centurion Lifestyle",
    branchCode: "2645",
    accountNumber: "10240912622",
    accountType: "Current"
  }

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-amber-50">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content text-center">
            <Gift className="w-16 h-16 text-amber-600 mx-auto mb-8" />
            <h1 className="text-6xl md:text-8xl font-editorial text-amber-900 mb-8 tracking-wide">Gift Registry</h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-cormorant">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift,
              we've curated these registries and experiences to help us begin our new journey together.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Divider */}
      <div className="editorial-divider">
        <span>Our Curated Registries</span>
      </div>

      {/* Store Registries */}
      <section className="py-24 bg-white">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
              {/* Le Creuset */}
              <div className="card-editorial hover:bg-amber-50 transition-all duration-300">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Home className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-editorial text-amber-900 mb-3 tracking-wide">Le Creuset</h3>
                  <p className="text-amber-600 font-cormorant text-base font-semibold uppercase tracking-wider mb-6">Premium Cookware & Kitchen Essentials</p>
                </div>
                <div className="px-8 pb-8 space-y-6">
                  <p className="text-gray-700 text-base font-cormorant leading-relaxed">
                    Discover our selection of high-quality cookware, bakeware, and kitchen accessories from the renowned French brand Le Creuset.
                  </p>
                  <div className="space-y-3">
                    <p className="font-semibold text-amber-900 font-cormorant uppercase tracking-wider">Featured Items:</p>
                    <ul className="text-sm text-gray-600 space-y-2 font-cormorant">
                      <li>• Cast iron cookware sets</li>
                      <li>• Dutch ovens and casseroles</li>
                      <li>• Stoneware baking dishes</li>
                      <li>• Kitchen tools and accessories</li>
                    </ul>
                  </div>
                  <Button asChild className="amber-button w-full">
                    <Link href="https://www.lecreuset.co.za/gift-registry.html?mrrid=4929886" target="_blank" rel="noopener noreferrer">
                      View Registry <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Yuppiechef */}
              <div className="card-editorial hover:bg-amber-50 transition-all duration-300">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Home className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-editorial text-amber-900 mb-3 tracking-wide">Yuppiechef</h3>
                  <p className="text-amber-600 font-cormorant text-base font-semibold uppercase tracking-wider mb-6">Kitchen & Home Appliances</p>
                </div>
                <div className="px-8 pb-8 space-y-6">
                  <p className="text-gray-700 text-base font-cormorant leading-relaxed">
                    Find everything you need for the modern kitchen and home, from small appliances to gourmet ingredients and homeware.
                  </p>
                  <div className="space-y-3">
                    <p className="font-semibold text-amber-900 font-cormorant uppercase tracking-wider">Featured Items:</p>
                    <ul className="text-sm text-gray-600 space-y-2 font-cormorant">
                      <li>• Kitchen appliances and gadgets</li>
                      <li>• Coffee machines and accessories</li>
                      <li>• Cookware and bakeware</li>
                      <li>• Home and lifestyle products</li>
                    </ul>
                  </div>
                  <Button asChild className="amber-button w-full">
                    <Link href="http://www.yuppiechef.com/yc8796034" target="_blank" rel="noopener noreferrer">
                      View Registry <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Mr Price Home */}
              <div className="card-editorial hover:bg-amber-50 transition-all duration-300">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Home className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-editorial text-amber-900 mb-3 tracking-wide">Mr Price Home</h3>
                  <p className="text-amber-600 font-cormorant text-base font-semibold uppercase tracking-wider mb-6">Home Decor & Essentials</p>
                </div>
                <div className="px-8 pb-8 space-y-6">
                  <p className="text-gray-700 text-base font-cormorant leading-relaxed">
                    Stylish and affordable home decor, furniture, and household essentials to help us create our perfect home together.
                  </p>
                  <div className="space-y-3">
                    <p className="font-semibold text-amber-900 font-cormorant uppercase tracking-wider">Featured Items:</p>
                    <ul className="text-sm text-gray-600 space-y-2 font-cormorant">
                      <li>• Home decor and accessories</li>
                      <li>• Bedding and bath essentials</li>
                      <li>• Kitchen and dining items</li>
                      <li>• Storage solutions</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <p className="font-semibold text-amber-900 text-sm font-cormorant uppercase tracking-wider">Registry ID:</p>
                    <p className="text-amber-600 font-mono text-base bg-amber-50 p-2 rounded border">DWWEDD4381</p>
                  </div>
                  <Button asChild className="amber-button w-full">
                    <Link href="https://www.mrphome.com/en_za/giftregistry/view/index/id/DWWEDD4381" target="_blank" rel="noopener noreferrer">
                      View Registry <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Cash Donations Section */}
            <div className="text-center mb-12">
              <Banknote className="w-12 h-12 text-amber-600 mx-auto mb-6" />
              <h2 className="text-3xl font-editorial text-amber-900 mb-4 tracking-wide">Cash Contributions</h2>
              <p className="text-lg text-gray-700 font-cormorant max-w-2xl mx-auto">
                For those who prefer to give cash gifts, we've made it easy with our banking details below
              </p>
            </div>

            {/* Banking Details Grid - 2x2 */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Account Information */}
              <div className="card-editorial p-8 hover:bg-amber-50 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-editorial text-amber-900 mb-2 tracking-wide">Account Details</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-amber-50 rounded">
                    <div>
                      <p className="text-xs font-cormorant uppercase tracking-wider text-amber-800 font-semibold">Account Name</p>
                      <p className="text-sm font-cormorant text-gray-900">{bankingDetails.accountName}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(bankingDetails.accountName, 'accountName')}
                      className="p-2 text-amber-600 hover:text-amber-800 transition-colors"
                    >
                      {copiedField === 'accountName' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-amber-100 rounded border border-amber-200">
                    <div>
                      <p className="text-xs font-cormorant uppercase tracking-wider text-amber-800 font-semibold">Account Number</p>
                      <p className="text-lg font-mono text-gray-900 font-semibold">{bankingDetails.accountNumber}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(bankingDetails.accountNumber, 'accountNumber')}
                      className="p-2 text-amber-600 hover:text-amber-800 transition-colors"
                    >
                      {copiedField === 'accountNumber' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-amber-50 rounded">
                    <div>
                      <p className="text-xs font-cormorant uppercase tracking-wider text-amber-800 font-semibold">Account Type</p>
                      <p className="text-sm font-cormorant text-gray-900">{bankingDetails.accountType}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(bankingDetails.accountType, 'accountType')}
                      className="p-2 text-amber-600 hover:text-amber-800 transition-colors"
                    >
                      {copiedField === 'accountType' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Bank Information */}
              <div className="card-editorial p-8 hover:bg-amber-50 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-editorial text-amber-900 mb-2 tracking-wide">Bank Information</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-amber-50 rounded">
                    <div>
                      <p className="text-xs font-cormorant uppercase tracking-wider text-amber-800 font-semibold">Bank Name</p>
                      <p className="text-sm font-cormorant text-gray-900">{bankingDetails.bankName}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(bankingDetails.bankName, 'bankName')}
                      className="p-2 text-amber-600 hover:text-amber-800 transition-colors"
                    >
                      {copiedField === 'bankName' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-amber-50 rounded">
                    <div>
                      <p className="text-xs font-cormorant uppercase tracking-wider text-amber-800 font-semibold">Branch</p>
                      <p className="text-sm font-cormorant text-gray-900">{bankingDetails.branch}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(bankingDetails.branch, 'branch')}
                      className="p-2 text-amber-600 hover:text-amber-800 transition-colors"
                    >
                      {copiedField === 'branch' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-amber-100 rounded border border-amber-200">
                    <div>
                      <p className="text-xs font-cormorant uppercase tracking-wider text-amber-800 font-semibold">Branch Code</p>
                      <p className="text-lg font-mono text-gray-900 font-semibold">{bankingDetails.branchCode}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(bankingDetails.branchCode, 'branchCode')}
                      className="p-2 text-amber-600 hover:text-amber-800 transition-colors"
                    >
                      {copiedField === 'branchCode' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Payment Reference */}
              <div className="card-editorial p-8 hover:bg-amber-50 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-editorial text-amber-900 mb-2 tracking-wide">Payment Reference</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-amber-50 rounded text-center">
                    <p className="text-xs font-cormorant uppercase tracking-wider text-amber-800 font-semibold mb-2">Suggested Reference</p>
                    <p className="text-base font-cormorant text-gray-900 font-semibold">"Diana & Victor Wedding Gift"</p>
                  </div>
                  <div className="p-4 bg-amber-50 rounded text-center">
                    <p className="text-xs font-cormorant uppercase tracking-wider text-amber-800 font-semibold mb-2">Or Include</p>
                    <p className="text-sm font-cormorant text-gray-700">Your name for identification</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard("Diana & Victor Wedding Gift", 'reference')}
                    className="w-full p-3 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
                  >
                    {copiedField === 'reference' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span className="font-cormorant">Copy Reference</span>
                  </button>
                </div>
              </div>

              {/* Thank You Note */}
              <div className="card-editorial p-8 hover:bg-amber-50 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-rose-600" />
                  </div>
                  <h3 className="text-xl font-editorial text-amber-900 mb-2 tracking-wide">Gratitude Note</h3>
                </div>
                <div className="space-y-4 text-center">
                  <p className="text-gray-700 font-cormorant text-base leading-relaxed">
                    Your generous contribution will help us start our married life together and create our perfect home.
                  </p>
                  <div className="p-4 bg-amber-50 rounded">
                    <p className="text-amber-800 font-cormorant text-sm font-semibold">
                      Every gift, large or small, means the world to us! 💝
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 font-cormorant italic">
                    Thank you notes will be sent within three months of our wedding day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Divider */}
      <div className="editorial-divider">
        <span>Honeymoon Contributions</span>
      </div>

      {/* Honeymoon Fund */}
      <section className="py-24 bg-amber-50">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content">
            <div className="text-center mb-16">
              <Heart className="w-16 h-16 text-amber-600 mx-auto mb-8" />
              <h2 className="text-4xl font-editorial text-amber-900 mb-6 tracking-wide">Honeymoon Fund</h2>
              <p className="text-xl text-gray-700 font-cormorant">Help us create magical memories in Mauritius & Rodrigues Island</p>
            </div>

            <div className="card-editorial mb-16 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <Image
                    src="https://blog.pentravel.co.za/wp-content/uploads/2022/06/NORTH.jpg"
                    alt="Beautiful Mauritius beach destination"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-12 flex items-center">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-editorial text-amber-900 tracking-wide">Our Dream Destination</h3>
                    <p className="text-gray-700 font-cormorant text-lg leading-relaxed">
                      We're planning a romantic honeymoon to the beautiful islands of Mauritius and Rodrigues. Your
                      contribution will help us create unforgettable memories as we begin our married life together.
                    </p>
                    <Button 
                      onClick={() => setShowBankingDetails(true)}
                      className="amber-button"
                    >
                      Contribute to Honeymoon <CreditCard className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Banking Details Modal/Overlay */}
            {showBankingDetails && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="relative p-8">
                    <button
                      onClick={() => setShowBankingDetails(false)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                    
                    <div className="text-center mb-8">
                      <CreditCard className="w-16 h-16 text-amber-600 mx-auto mb-6" />
                      <h3 className="text-3xl font-editorial text-amber-900 mb-4 tracking-wide">Banking Details</h3>
                      <p className="text-lg text-gray-700 font-cormorant">For your generous contributions to our honeymoon fund</p>
                    </div>

                    <div className="card-editorial p-8 space-y-6">
                      <div className="grid gap-6">
                        <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
                          <div>
                            <p className="text-sm font-cormorant uppercase tracking-wider text-amber-800 font-semibold">Account Name</p>
                            <p className="text-lg font-cormorant text-gray-900">{bankingDetails.accountName}</p>
                          </div>
                          <button
                            onClick={() => copyToClipboard(bankingDetails.accountName, 'accountName')}
                            className="p-2 text-amber-600 hover:text-amber-800 transition-colors"
                          >
                            {copiedField === 'accountName' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                          </button>
                        </div>

                        <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
                          <div>
                            <p className="text-sm font-cormorant uppercase tracking-wider text-amber-800 font-semibold">Bank Name</p>
                            <p className="text-lg font-cormorant text-gray-900">{bankingDetails.bankName}</p>
                          </div>
                          <button
                            onClick={() => copyToClipboard(bankingDetails.bankName, 'bankName')}
                            className="p-2 text-amber-600 hover:text-amber-800 transition-colors"
                          >
                            {copiedField === 'bankName' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                          </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
                            <div>
                              <p className="text-sm font-cormorant uppercase tracking-wider text-amber-800 font-semibold">Branch</p>
                              <p className="text-lg font-cormorant text-gray-900">{bankingDetails.branch}</p>
                            </div>
                            <button
                              onClick={() => copyToClipboard(bankingDetails.branch, 'branch')}
                              className="p-2 text-amber-600 hover:text-amber-800 transition-colors"
                            >
                              {copiedField === 'branch' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                            </button>
                          </div>

                          <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
                            <div>
                              <p className="text-sm font-cormorant uppercase tracking-wider text-amber-800 font-semibold">Branch Code</p>
                              <p className="text-lg font-mono text-gray-900">{bankingDetails.branchCode}</p>
                            </div>
                            <button
                              onClick={() => copyToClipboard(bankingDetails.branchCode, 'branchCode')}
                              className="p-2 text-amber-600 hover:text-amber-800 transition-colors"
                            >
                              {copiedField === 'branchCode' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>

                        <div className="flex justify-between items-center p-4 bg-amber-100 rounded-lg border-2 border-amber-200">
                          <div>
                            <p className="text-sm font-cormorant uppercase tracking-wider text-amber-800 font-semibold">Account Number</p>
                            <p className="text-xl font-mono text-gray-900 font-semibold">{bankingDetails.accountNumber}</p>
                          </div>
                          <button
                            onClick={() => copyToClipboard(bankingDetails.accountNumber, 'accountNumber')}
                            className="p-2 text-amber-600 hover:text-amber-800 transition-colors"
                          >
                            {copiedField === 'accountNumber' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                          </button>
                        </div>

                        <div className="flex justify-between items-center p-4 bg-amber-50 rounded-lg">
                          <div>
                            <p className="text-sm font-cormorant uppercase tracking-wider text-amber-800 font-semibold">Account Type</p>
                            <p className="text-lg font-cormorant text-gray-900">{bankingDetails.accountType}</p>
                          </div>
                          <button
                            onClick={() => copyToClipboard(bankingDetails.accountType, 'accountType')}
                            className="p-2 text-amber-600 hover:text-amber-800 transition-colors"
                          >
                            {copiedField === 'accountType' ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>

                      <div className="text-center pt-6 border-t border-amber-200">
                        <p className="text-gray-700 font-cormorant text-lg leading-relaxed">
                          <strong className="text-amber-900">Reference:</strong> Please use "Diana & Victor Wedding Gift" as your payment reference
                        </p>
                      </div>
                    </div>

                    <div className="text-center mt-8">
                      <p className="text-amber-800 font-cormorant text-lg font-semibold mb-4">Thank you for your generous contribution! 💝</p>
                      <Button 
                        onClick={() => setShowBankingDetails(false)}
                        className="amber-button-outline"
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Honeymoon Experiences */}
            {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-editorial p-8 text-center hover:bg-white transition-all duration-300">
                <h4 className="font-cormorant font-semibold text-amber-900 mb-3 text-lg uppercase tracking-wider">Romantic Sunset Dinner</h4>
                <p className="text-3xl font-editorial text-amber-600 mb-3">R2,500</p>
                <p className="text-sm text-gray-600 font-cormorant">Private beachside dining experience</p>
              </div>

              <div className="card-editorial p-8 text-center hover:bg-white transition-all duration-300">
                <h4 className="font-cormorant font-semibold text-amber-900 mb-3 text-lg uppercase tracking-wider">Catamaran Cruise</h4>
                <p className="text-3xl font-editorial text-amber-600 mb-3">R3,200</p>
                <p className="text-sm text-gray-600 font-cormorant">Full day sailing adventure</p>
              </div>

              <div className="card-editorial p-8 text-center hover:bg-white transition-all duration-300">
                <h4 className="font-cormorant font-semibold text-amber-900 mb-3 text-lg uppercase tracking-wider">Couples Spa Day</h4>
                <p className="text-3xl font-editorial text-amber-600 mb-3">R4,500</p>
                <p className="text-sm text-gray-600 font-cormorant">Relaxing spa treatments for two</p>
              </div>

              <div className="card-editorial p-8 text-center hover:bg-white transition-all duration-300">
                <h4 className="font-cormorant font-semibold text-amber-900 mb-3 text-lg uppercase tracking-wider">Island Hopping Adventure</h4>
                <p className="text-3xl font-editorial text-amber-600 mb-3">R6,000</p>
                <p className="text-sm text-gray-600 font-cormorant">Explore multiple islands</p>
              </div>

              <div className="card-editorial p-8 text-center hover:bg-white transition-all duration-300">
                <h4 className="font-cormorant font-semibold text-amber-900 mb-3 text-lg uppercase tracking-wider">Underwater Sea Walk</h4>
                <p className="text-3xl font-editorial text-amber-600 mb-3">R2,800</p>
                <p className="text-sm text-gray-600 font-cormorant">Unique underwater experience</p>
              </div>

              <div className="card-editorial p-8 text-center hover:bg-white transition-all duration-300">
                <h4 className="font-cormorant font-semibold text-amber-900 mb-3 text-lg uppercase tracking-wider">Any Amount</h4>
                <p className="text-3xl font-editorial text-amber-600 mb-3">R???</p>
                <p className="text-sm text-gray-600 font-cormorant">Every contribution is appreciated</p>
              </div>
            </div>*/}
          </div>
        </div>
      </section>

      {/* Editorial Divider */}
      <div className="editorial-divider">
        <span>Registry Guidelines</span>
      </div>

      {/* Registry Guidelines */}
      <section className="py-24 bg-white">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="card-editorial p-10">
                <h3 className="text-2xl font-editorial text-amber-900 mb-6 tracking-wide">Gift Preferences</h3>
                <ul className="space-y-4 text-gray-700 font-cormorant text-lg">
                  <li>• We appreciate gifts from our registries, but any thoughtful gift is welcome</li>
                  <li>• Traditional South African items and cultural pieces are especially meaningful</li>
                  <li>• Handmade or personalized gifts hold special value to us</li>
                  <li>• If you prefer to give cash, it will go toward our new home</li>
                </ul>
              </div>

              <div className="card-editorial p-10">
                <h3 className="text-2xl font-editorial text-amber-900 mb-6 tracking-wide">Delivery Information</h3>
                <div className="space-y-6 text-gray-700 font-cormorant text-lg">
                  <div className="flex items-start gap-3">
                    <Home className="w-5 h-5 text-amber-600 mt-1" />
                    <div>
                      <p className="font-semibold text-amber-900 uppercase tracking-wider">Home Address:</p>
                      <p className="text-base">
                       589 Bach Street,<br />
                        Constantia Park,<br />
                        Pretoria, 0181
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-amber-600 mt-1" />
                    <div>
                      <p className="font-semibold text-amber-900 uppercase tracking-wider">Contact:</p>
                      <p className="text-base">+27 79 246 8279</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-amber-600 mt-1" />
                    <div>
                      <p className="font-semibold text-amber-900 uppercase tracking-wider">Email:</p>
                      <p className="text-base">weddingdianavictor@gmail.com</p>
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
        <span>Thank You</span>
      </div>

      {/* Thank You Message */}
      <section className="py-24 bg-amber-50">
        <div className="magazine-grid container mx-auto px-6">
          <div className="magazine-content">
            <div className="card-editorial p-12 text-center">
              <Heart className="w-16 h-16 text-amber-600 mx-auto mb-8" />
              <h2 className="text-4xl font-editorial text-amber-900 mb-6 tracking-wide">With Gratitude</h2>
              <p className="text-xl text-gray-700 font-cormorant leading-relaxed max-w-3xl mx-auto">
                Your presence at our wedding is truly the greatest gift we could ask for. Any additional gifts you
                choose to give will be treasured as we build our life together. Thank you for being part of our
                special day and for your love and support.
              </p>
              <div className="mt-8 text-amber-900 font-cormorant text-lg font-semibold">
                With all our love,<br />
                Diana & Victor
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
