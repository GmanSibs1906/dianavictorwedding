import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Heart, Users, Flower, Crown } from "lucide-react"

export default function BridalPartyPage() {
  // Placeholder data - will be updated when actual wedding party information is provided
  const bridesmaids = [
    {
      name: "Emma Thompson",
      role: "Maid of Honor",
      relationship: "Sister",
      description:
        "Sarah's beloved sister and best friend since childhood. Emma has been Sarah's constant support and confidante through all of life's adventures.",
      image: "/placeholder.svg?height=300&width=250&text=Emma",
    },
    {
      name: "Jessica Martinez",
      role: "Bridesmaid",
      relationship: "College Best Friend",
      description:
        "Met Sarah during their freshman year at university. Jessica and Sarah have shared countless memories and remain incredibly close.",
      image: "/placeholder.svg?height=300&width=250&text=Jessica",
    },
    {
      name: "Rachel Green",
      role: "Bridesmaid",
      relationship: "Childhood Friend",
      description:
        "Sarah's friend since elementary school. Rachel has been there through all the important moments in Sarah's life.",
      image: "/placeholder.svg?height=300&width=250&text=Rachel",
    },
  ]

  const groomsmen = [
    {
      name: "David Wilson",
      role: "Best Man",
      relationship: "Brother",
      description:
        "Michael's older brother and lifelong mentor. David has always been Michael's role model and biggest supporter.",
      image: "/placeholder.svg?height=300&width=250&text=David",
    },
    {
      name: "James Rodriguez",
      role: "Groomsman",
      relationship: "College Roommate",
      description:
        "Michael's college roommate and adventure buddy. James and Michael have traveled the world together and share a love for hiking.",
      image: "/placeholder.svg?height=300&width=250&text=James",
    },
    {
      name: "Alex Chen",
      role: "Groomsman",
      relationship: "Work Colleague",
      description:
        "Started as colleagues but quickly became great friends. Alex and Michael bond over their shared passion for photography.",
      image: "/placeholder.svg?height=300&width=250&text=Alex",
    },
  ]

  const flowerGirls = [
    {
      name: "Lily Thompson",
      role: "Flower Girl",
      relationship: "Niece",
      age: 6,
      description:
        "Emma's daughter and Sarah's adorable niece. Lily is excited to scatter flower petals down the aisle.",
      image: "/placeholder.svg?height=300&width=250&text=Lily",
    },
  ]

  const pageBoys = [
    {
      name: "Oliver Wilson",
      role: "Ring Bearer",
      relationship: "Nephew",
      age: 5,
      description: "David's son and Michael's nephew. Oliver takes his ring-bearing duties very seriously.",
      image: "/placeholder.svg?height=300&width=250&text=Oliver",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-amber-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 text-amber-800 hover:text-amber-600">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="text-2xl font-serif text-amber-900">Sarah & Michael</div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif text-amber-900 mb-4">Our Wedding Party</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Meet the special people who will be standing by our side on our wedding day. These are the friends and
              family members who have supported us throughout our journey and will help us celebrate this momentous
              occasion.
            </p>
          </div>

          {/* Bridesmaids */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif text-amber-900 mb-4 flex items-center justify-center gap-3">
                <Heart className="w-8 h-8" />
                Bridesmaids
              </h2>
              <p className="text-gray-700">The amazing women supporting Sarah</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {bridesmaids.map((bridesmaid, index) => (
                <Card key={index} className="shadow-lg border-amber-200 overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={bridesmaid.image || "/placeholder.svg"}
                      alt={bridesmaid.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="bg-amber-50">
                    <CardTitle className="text-xl font-serif text-amber-900 text-center">{bridesmaid.name}</CardTitle>
                    <p className="text-center text-amber-700 font-medium">{bridesmaid.role}</p>
                    <p className="text-center text-sm text-gray-600">{bridesmaid.relationship}</p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-700 text-sm leading-relaxed">{bridesmaid.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Groomsmen */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif text-amber-900 mb-4 flex items-center justify-center gap-3">
                <Users className="w-8 h-8" />
                Groomsmen
              </h2>
              <p className="text-gray-700">The incredible men supporting Michael</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {groomsmen.map((groomsman, index) => (
                <Card key={index} className="shadow-lg border-amber-200 overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={groomsman.image || "/placeholder.svg"}
                      alt={groomsman.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="bg-amber-50">
                    <CardTitle className="text-xl font-serif text-amber-900 text-center">{groomsman.name}</CardTitle>
                    <p className="text-center text-amber-700 font-medium">{groomsman.role}</p>
                    <p className="text-center text-sm text-gray-600">{groomsman.relationship}</p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-700 text-sm leading-relaxed">{groomsman.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Flower Girls & Page Boys */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Flower Girls */}
            <section>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-serif text-amber-900 mb-4 flex items-center justify-center gap-3">
                  <Flower className="w-6 h-6" />
                  Flower Girls
                </h2>
                <p className="text-gray-700">Our precious little ones</p>
              </div>
              <div className="space-y-6">
                {flowerGirls.map((girl, index) => (
                  <Card key={index} className="shadow-lg border-amber-200 overflow-hidden">
                    <div className="grid md:grid-cols-2">
                      <div className="relative h-48">
                        <Image src={girl.image || "/placeholder.svg"} alt={girl.name} fill className="object-cover" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-serif text-amber-900 mb-1">{girl.name}</h3>
                        <p className="text-amber-700 font-medium text-sm mb-1">{girl.role}</p>
                        <p className="text-gray-600 text-xs mb-3">
                          {girl.relationship} • Age {girl.age}
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">{girl.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Page Boys */}
            <section>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-serif text-amber-900 mb-4 flex items-center justify-center gap-3">
                  <Crown className="w-6 h-6" />
                  Ring Bearer
                </h2>
                <p className="text-gray-700">Our little gentleman</p>
              </div>
              <div className="space-y-6">
                {pageBoys.map((boy, index) => (
                  <Card key={index} className="shadow-lg border-amber-200 overflow-hidden">
                    <div className="grid md:grid-cols-2">
                      <div className="relative h-48">
                        <Image src={boy.image || "/placeholder.svg"} alt={boy.name} fill className="object-cover" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-serif text-amber-900 mb-1">{boy.name}</h3>
                        <p className="text-amber-700 font-medium text-sm mb-1">{boy.role}</p>
                        <p className="text-gray-600 text-xs mb-3">
                          {boy.relationship} • Age {boy.age}
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">{boy.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Thank You Note */}
          <div className="mt-16 text-center">
            <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-amber-900 mb-4">A Special Thank You</h3>
                <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  We are incredibly grateful to have such amazing people in our lives. Each member of our wedding party
                  holds a special place in our hearts, and we couldn't imagine celebrating this day without them. Thank
                  you for being part of our journey and for standing with us as we begin this new chapter together.
                </p>
                <p className="text-amber-800 font-medium mt-4">With love, Sarah & Michael</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
