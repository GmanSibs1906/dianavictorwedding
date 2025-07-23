"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, Users, Utensils, Music } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function RSVPPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attendance: "",
    guestCount: "1",
    dietaryRestrictions: "",
    songRequest: "",
    message: "",
    ceremony: false,
    reception: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("RSVP submitted:", formData)
    alert("Thank you for your RSVP! We'll be in touch soon.")
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-amber-100 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif text-amber-900 mb-6">RSVP</h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We're so excited to celebrate with you! Please let us know if you'll be joining us for our special day.
              Your response is requested by November 15th, 2024.
            </p>
          </div>
        </div>
      </section>

      {/* RSVP Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white shadow-lg border-amber-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif text-amber-900">Please Respond</CardTitle>
                <p className="text-gray-600">We can't wait to hear from you!</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-serif text-amber-800 border-b border-amber-200 pb-2">
                      Your Information
                    </h3>

                    <div>
                      <Label htmlFor="name" className="text-amber-800">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="border-amber-200 focus:border-amber-400"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-amber-800">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="border-amber-200 focus:border-amber-400"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-amber-800">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="border-amber-200 focus:border-amber-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Attendance */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-serif text-amber-800 border-b border-amber-200 pb-2">
                      Will you be attending?
                    </h3>

                    <RadioGroup
                      value={formData.attendance}
                      onValueChange={(value) => handleInputChange("attendance", value)}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="yes" className="border-amber-400 text-amber-600" />
                        <Label htmlFor="yes" className="text-gray-700">
                          Yes, I'll be there! Can't wait to celebrate with you.
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="no" className="border-amber-400 text-amber-600" />
                        <Label htmlFor="no" className="text-gray-700">
                          Sorry, I won't be able to make it.
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {formData.attendance === "yes" && (
                    <div className="space-y-4">
                      {/* Event Selection */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-serif text-amber-800 border-b border-amber-200 pb-2">
                          Which events will you attend?
                        </h3>

                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="ceremony"
                              checked={formData.ceremony}
                              onCheckedChange={(checked) => handleInputChange("ceremony", checked as boolean)}
                              className="border-amber-400 data-[state=checked]:bg-amber-600"
                            />
                            <Label htmlFor="ceremony" className="text-gray-700">
                              Wedding Ceremony (12:30 PM - Sacred Heart Cathedral)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="reception"
                              checked={formData.reception}
                              onCheckedChange={(checked) => handleInputChange("reception", checked as boolean)}
                              className="border-amber-400 data-[state=checked]:bg-amber-600"
                            />
                            <Label htmlFor="reception" className="text-gray-700">
                              Wedding Reception (6:00 PM - De Harte Wedding Venue)
                            </Label>
                          </div>
                        </div>
                      </div>

                      {/* Guest Count */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-serif text-amber-800 border-b border-amber-200 pb-2">
                          <Users className="w-5 h-5 inline mr-2" />
                          Number of Guests
                        </h3>

                        <div>
                          <Label htmlFor="guestCount" className="text-amber-800">
                            How many people will be attending? (including yourself)
                          </Label>
                          <RadioGroup
                            value={formData.guestCount}
                            onValueChange={(value) => handleInputChange("guestCount", value)}
                            className="flex flex-wrap gap-4 mt-2"
                          >
                            {[1, 2, 3, 4, 5].map((num) => (
                              <div key={num} className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value={num.toString()}
                                  id={`guest-${num}`}
                                  className="border-amber-400 text-amber-600"
                                />
                                <Label htmlFor={`guest-${num}`} className="text-gray-700">
                                  {num} {num === 1 ? "person" : "people"}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>
                      </div>

                      {/* Dietary Restrictions */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-serif text-amber-800 border-b border-amber-200 pb-2">
                          <Utensils className="w-5 h-5 inline mr-2" />
                          Dietary Requirements
                        </h3>

                        <div>
                          <Label htmlFor="dietary" className="text-amber-800">
                            Please let us know about any dietary restrictions or allergies
                          </Label>
                          <Textarea
                            id="dietary"
                            value={formData.dietaryRestrictions}
                            onChange={(e) => handleInputChange("dietaryRestrictions", e.target.value)}
                            placeholder="e.g., Vegetarian, Vegan, Gluten-free, Nut allergies, etc."
                            className="border-amber-200 focus:border-amber-400 mt-2"
                            rows={3}
                          />
                        </div>
                      </div>

                      {/* Song Request */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-serif text-amber-800 border-b border-amber-200 pb-2">
                          <Music className="w-5 h-5 inline mr-2" />
                          Song Request
                        </h3>

                        <div>
                          <Label htmlFor="song" className="text-amber-800">
                            Request a song for our reception playlist
                          </Label>
                          <Input
                            id="song"
                            type="text"
                            value={formData.songRequest}
                            onChange={(e) => handleInputChange("songRequest", e.target.value)}
                            placeholder="Artist - Song Title"
                            className="border-amber-200 focus:border-amber-400 mt-2"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Message */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-serif text-amber-800 border-b border-amber-200 pb-2">
                      Special Message
                    </h3>

                    <div>
                      <Label htmlFor="message" className="text-amber-800">
                        Share a message, memory, or well wishes with us
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="We'd love to hear from you..."
                        className="border-amber-200 focus:border-amber-400 mt-2"
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg">
                      Send RSVP
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card className="bg-amber-50 border-amber-200 mt-8">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-serif text-amber-800 mb-3">Important Information</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Please respond by November 15th, 2024</li>
                  <li>• If you have any questions, contact us at wedding@dianaandvictor.com</li>
                  <li>• Ceremony begins promptly at 12:30 PM - please arrive by 12:00 PM</li>
                  <li>• Reception starts at 6:00 PM with cocktails and dinner to follow</li>
                  <li>• Dress code: Formal/Semi-formal attire requested</li>
                </ul>
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
