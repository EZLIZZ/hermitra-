"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Phone,
  Star,
  Clock,
  Calendar,
  Video,
  MessageCircle,
  Award,
  GraduationCap,
  Heart,
  Search,
} from "lucide-react"

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")

  const doctors = [
    {
      id: 1,
      name: "Dr. Sunita Sharma",
      specialty: "Reproductive Endocrinologist",
      rating: 4.9,
      reviews: 127,
      location: "Kathmandu, Nepal",
      phone: "+977-1-4567890",
      email: "sunita.sharma@healthcenter.com.np",
      available: "Sun-Fri 9AM-5PM",
      experience: "15+ years",
      education: "BPKIHS, Dharan",
      languages: ["Nepali", "English", "Hindi"],
      consultationFee: 550,
      image: "/placeholder.svg?height=100&width=100",
      about: "Specialized in PCOS treatment with focus on hormonal balance and fertility.",
      services: ["PCOS Treatment", "Fertility Consultation", "Hormone Therapy"],
      nextAvailable: "Tomorrow 2:00 PM",
      acceptsInsurance: true,
      telemedicine: true,
    },
    {
      id: 2,
      name: "Dr. Priya Thapa",
      specialty: "PCOS Specialist",
      rating: 4.8,
      reviews: 89,
      location: "Pokhara, Nepal",
      phone: "+977-61-567890",
      email: "priya.thapa@wellness.com.np",
      available: "Tue-Sat 10AM-6PM",
      experience: "12+ years",
      education: "IOM, Maharajgunj",
      languages: ["Nepali", "English"],
      consultationFee: 500,
      image: "/placeholder.svg?height=100&width=100",
      about: "Integrative approach to PCOS management combining traditional and holistic methods.",
      services: ["PCOS Management", "Nutritional Counseling", "Lifestyle Medicine"],
      nextAvailable: "Today 4:30 PM",
      acceptsInsurance: true,
      telemedicine: true,
    },
    {
      id: 3,
      name: "Dr. Rajesh Shrestha",
      specialty: "Endocrinologist",
      rating: 4.7,
      reviews: 156,
      location: "Lalitpur, Nepal",
      phone: "+977-1-5567890",
      email: "r.shrestha@endocenter.com.np",
      available: "Mon-Thu 8AM-4PM",
      experience: "20+ years",
      education: "NAMS, Bir Hospital",
      languages: ["Nepali", "English", "Hindi"],
      consultationFee: 600,
      image: "/placeholder.svg?height=100&width=100",
      about: "Expert in metabolic disorders and insulin resistance associated with PCOS.",
      services: ["Diabetes Management", "PCOS Treatment", "Metabolic Disorders"],
      nextAvailable: "Next week Mon 10:00 AM",
      acceptsInsurance: true,
      telemedicine: false,
    },
    {
      id: 4,
      name: "Dr. Kamala Adhikari",
      specialty: "Gynecologist",
      rating: 4.6,
      reviews: 203,
      location: "Chitwan, Nepal",
      phone: "+977-56-567890",
      email: "kamala.adhikari@womenshealth.com.np",
      available: "Mon-Fri 9AM-5PM",
      experience: "18+ years",
      education: "PAHS, Lalitpur",
      languages: ["Nepali", "English"],
      consultationFee: 520,
      image: "/placeholder.svg?height=100&width=100",
      about: "Comprehensive women's health care with expertise in PCOS and reproductive health.",
      services: ["Women's Health", "PCOS Care", "Reproductive Health"],
      nextAvailable: "Tomorrow 11:00 AM",
      acceptsInsurance: true,
      telemedicine: true,
    },
    {
      id: 5,
      name: "Nutritionist Sita Poudel",
      specialty: "Nutritionist",
      rating: 4.8,
      reviews: 95,
      location: "Kathmandu, Nepal",
      phone: "+977-1-4567891",
      email: "sita.poudel@nutrition.com.np",
      available: "Sun-Fri 10AM-6PM",
      experience: "10+ years",
      education: "MSc Nutrition, TU",
      languages: ["Nepali", "English"],
      consultationFee: 450,
      image: "/placeholder.svg?height=100&width=100",
      about: "Specialist in PCOS diet planning and nutrition counseling with focus on Nepali foods.",
      services: ["PCOS Diet Planning", "Nepali Food Nutrition", "Weight Management"],
      nextAvailable: "Today 3:00 PM",
      acceptsInsurance: false,
      telemedicine: true,
    },
    {
      id: 6,
      name: "Nutritionist Rama Karki",
      specialty: "Nutritionist",
      rating: 4.7,
      reviews: 78,
      location: "Pokhara, Nepal",
      phone: "+977-61-567891",
      email: "rama.karki@dietplan.com.np",
      available: "Tue-Sat 9AM-5PM",
      experience: "8+ years",
      education: "BSc Nutrition, KU",
      languages: ["Nepali", "English"],
      consultationFee: 400,
      image: "/placeholder.svg?height=100&width=100",
      about: "PCOS management through local food and lifestyle modifications.",
      services: ["Local Diet Plans", "Lifestyle Counseling", "PCOS Nutrition"],
      nextAvailable: "Tomorrow 2:30 PM",
      acceptsInsurance: false,
      telemedicine: true,
    },
    {
      id: 7,
      name: "Dr. Bindu Koirala",
      specialty: "PCOS Specialist",
      rating: 4.9,
      reviews: 134,
      location: "Biratnagar, Nepal",
      phone: "+977-21-567890",
      email: "bindu.koirala@pcos.com.np",
      available: "Mon-Fri 8AM-4PM",
      experience: "14+ years",
      education: "BPKIHS, Dharan",
      languages: ["Nepali", "English", "Maithili"],
      consultationFee: 580,
      image: "/placeholder.svg?height=100&width=100",
      about: "Expert in PCOS diagnosis and treatment for adolescent and adult women.",
      services: ["PCOS Diagnosis", "Adolescent PCOS", "Adult PCOS Care"],
      nextAvailable: "Day after tomorrow 10:00 AM",
      acceptsInsurance: true,
      telemedicine: true,
    },
    {
      id: 8,
      name: "Dr. Anita Gurung",
      specialty: "Reproductive Endocrinologist",
      rating: 4.8,
      reviews: 112,
      location: "Butwal, Nepal",
      phone: "+977-71-567890",
      email: "anita.gurung@fertility.com.np",
      available: "Sun-Thu 9AM-5PM",
      experience: "16+ years",
      education: "NAMS, Bir Hospital",
      languages: ["Nepali", "English", "Tamang"],
      consultationFee: 570,
      image: "/placeholder.svg?height=100&width=100",
      about: "Specialist in reproductive hormones and PCOS-related fertility issues.",
      services: ["Fertility Treatment", "PCOS & Pregnancy", "Hormone Therapy"],
      nextAvailable: "Tomorrow 1:00 PM",
      acceptsInsurance: true,
      telemedicine: false,
    },
  ]

  const specialties = [
    "Reproductive Endocrinologist",
    "PCOS Specialist",
    "Endocrinologist",
    "Gynecologist",
    "Nutritionist",
  ]

  const locations = [
    "Kathmandu, Nepal",
    "Pokhara, Nepal",
    "Lalitpur, Nepal",
    "Chitwan, Nepal",
    "Biratnagar, Nepal",
    "Butwal, Nepal",
  ]

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = selectedSpecialty === "all" || doctor.specialty === selectedSpecialty
    const matchesLocation = selectedLocation === "all" || doctor.location === selectedLocation

    return matchesSearch && matchesSpecialty && matchesLocation
  })

  return (
    <div className="pt-10 py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Find PCOS Specialists in Nepal</h1>
          <p className="text-lg text-gray-600">Connect with experienced healthcare providers</p>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 animate-fade-in-up">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search doctors or specialties..."
              className="pl-10 border-pink-200 focus:border-pink-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="px-3 py-2 border border-pink-200 rounded-md focus:border-pink-400 focus:outline-none"
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
          >
            <option value="all">All Specialties</option>
            {specialties.map((specialty) => (
              <option key={specialty} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>

          <select
            className="px-3 py-2 border border-pink-200 rounded-md focus:border-pink-400 focus:outline-none"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="all">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Results Summary */}
        <div className="mb-6 animate-fade-in-up">
          <p className="text-gray-600">
            Found {filteredDoctors.length} specialists {searchTerm && `for "${searchTerm}"`}
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {filteredDoctors.map((doctor, index) => (
            <Card
              key={doctor.id}
              className="border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center">
                      <Heart className="h-8 w-8 text-pink-500" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-800">{doctor.name}</CardTitle>
                      <p className="text-purple-600 font-medium">{doctor.specialty}</p>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium">{doctor.rating}</span>
                        <span className="ml-1 text-sm text-gray-500">({doctor.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <Badge className="bg-green-100 text-green-800 mb-2">
                      {doctor.acceptsInsurance ? "Insurance" : "Cash"}
                    </Badge>
                    {doctor.telemedicine && (
                      <Badge variant="outline" className="border-blue-200 text-blue-600">
                        <Video className="h-3 w-3 mr-1" />
                        Telemedicine
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">{doctor.about}</p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {doctor.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    {doctor.experience}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {doctor.available}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award className="h-4 w-4 mr-2" />
                    {doctor.education}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {doctor.services.slice(0, 3).map((service, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <div>
                    <p className="text-sm text-gray-600">Next available:</p>
                    <p className="font-medium text-green-600">{doctor.nextAvailable}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Consultation</p>
                    <p className="font-bold text-purple-600">NPR {doctor.consultationFee}</p>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white transform hover:scale-105 transition-all duration-200">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Button>
                  <Button
                    variant="outline"
                    className="border-purple-300 text-purple-600 hover:bg-purple-50 bg-transparent"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-purple-300 text-purple-600 hover:bg-purple-50 bg-transparent"
                  >
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <Tabs defaultValue="insurance" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="insurance">Insurance Guide</TabsTrigger>
            <TabsTrigger value="questions">Questions to Ask</TabsTrigger>
            <TabsTrigger value="preparation">Appointment Prep</TabsTrigger>
          </TabsList>

          <TabsContent value="insurance" className="space-y-6">
            <Card className="border-green-200 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-green-600">Insurance Coverage for PCOS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Typically Covered Services:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Initial PCOS diagnosis and consultation</li>
                      <li>• Blood tests and hormone panels</li>
                      <li>• Ultrasound examinations</li>
                      <li>• Prescription medications</li>
                      <li>• Follow-up appointments</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">May Require Pre-Authorization:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Fertility treatments</li>
                      <li>• Specialized hormone therapies</li>
                      <li>• Nutritional counseling</li>
                      <li>• Mental health services</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="questions" className="space-y-6">
            <Card className="border-blue-200 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-blue-600">Questions to Ask Your Doctor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">About Diagnosis:</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• What tests do I need for PCOS diagnosis?</li>
                      <li>• How severe is my condition?</li>
                      <li>• What are my hormone levels?</li>
                      <li>• Are there any complications?</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">About Treatment:</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• What treatment options are available?</li>
                      <li>• What are the side effects?</li>
                      <li>• How long will treatment take?</li>
                      <li>• When should I see improvement?</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preparation" className="space-y-6">
            <Card className="border-purple-200 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-purple-600">Preparing for Your Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">Before Your Visit:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Track your menstrual cycle for 2-3 months</li>
                      <li>• List all current medications and supplements</li>
                      <li>• Note your symptoms and their frequency</li>
                      <li>• Prepare your family medical history</li>
                      <li>• Write down your questions</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-pink-50 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">What to Bring:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Insurance card and ID</li>
                      <li>• Previous test results</li>
                      <li>• List of current medications</li>
                      <li>• Symptom diary or tracking data</li>
                      <li>• Support person if needed</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}