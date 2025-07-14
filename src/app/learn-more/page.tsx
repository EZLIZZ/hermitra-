import Link from "next/link"
import { BookOpen, Heart, Users, Stethoscope, Calendar, Music, Apple, Camera } from "lucide-react"

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Understanding PCOS
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Comprehensive information about Polycystic Ovary Syndrome and how Hermitra can help you manage it
            effectively.
          </p>
        </div>
      </section>

      {/* What is PCOS Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What is PCOS?</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="prose prose-lg text-gray-700">
                <p className="text-xl leading-relaxed mb-6">
                  Polycystic Ovary Syndrome (PCOS) is a hormonal disorder that affects 1 in 10 women of reproductive
                  age. It's one of the most common causes of female infertility, but with proper management, women with
                  PCOS can lead healthy, fulfilling lives.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  PCOS is characterized by irregular menstrual periods, excess androgen levels, and polycystic ovaries.
                  The exact cause is unknown, but factors like genetics, insulin resistance, and inflammation play a
                  role.
                </p>
                <p className="text-lg leading-relaxed">
                  Early diagnosis and treatment can help control symptoms and prevent long-term complications like
                  diabetes and heart disease.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Common Symptoms</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Irregular or missed periods</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Excess hair growth (hirsutism)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Weight gain or difficulty losing weight</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Acne or oily skin</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Hair thinning or male-pattern baldness</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Insulin resistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Hermitra Helps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Hermitra Helps</h2>
            <p className="text-xl text-gray-600">Comprehensive tools and support for every aspect of PCOS management</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-4 mb-4">
                <Camera className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Ultrasound Analysis</h3>
              <p className="text-gray-600">
                Upload ultrasound images for AI-powered detection and analysis of PCOS indicators.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-4 mb-4">
                <Stethoscope className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Risk Assessment</h3>
              <p className="text-gray-600">
                Take comprehensive quizzes to understand your PCOS risk level and symptoms.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-indigo-100 to-blue-100 rounded-xl p-4 mb-4">
                <Calendar className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Period Tracking</h3>
              <p className="text-gray-600">
                Monitor menstrual cycles and identify patterns to better understand your body.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-xl p-4 mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Connection</h3>
              <p className="text-gray-600">
                Connect with PCOS specialists and healthcare professionals for personalized care.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-green-100 to-yellow-100 rounded-xl p-4 mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Exercise & Yoga</h3>
              <p className="text-gray-600">
                Access PCOS-friendly workout routines and yoga sessions designed for your needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-4 mb-4">
                <Apple className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Nutrition Guide</h3>
              <p className="text-gray-600">Discover PCOS-friendly foods and meal plans to support hormonal balance.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-4 mb-4">
                <Music className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Wellness Sounds</h3>
              <p className="text-gray-600">
                Relaxing music and meditation sounds for stress management and mental wellness.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-xl p-4 mb-4">
                <BookOpen className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Stories</h3>
              <p className="text-gray-600">
                Read inspiring stories from women who are successfully managing their PCOS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Approaches */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Treatment Approaches</h2>
            <p className="text-xl text-gray-600">
              PCOS management typically involves a combination of lifestyle changes and medical treatment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Lifestyle Management</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <span className="font-medium text-gray-800">Healthy Diet:</span>
                    <span className="text-gray-600"> Focus on low-glycemic foods, lean proteins, and healthy fats</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <span className="font-medium text-gray-800">Regular Exercise:</span>
                    <span className="text-gray-600"> Combination of cardio and strength training</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <span className="font-medium text-gray-800">Weight Management:</span>
                    <span className="text-gray-600"> Even modest weight loss can improve symptoms</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <span className="font-medium text-gray-800">Stress Management:</span>
                    <span className="text-gray-600"> Meditation, yoga, and adequate sleep</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Medical Treatment</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <span className="font-medium text-gray-800">Hormonal Birth Control:</span>
                    <span className="text-gray-600"> To regulate periods and reduce androgens</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <span className="font-medium text-gray-800">Metformin:</span>
                    <span className="text-gray-600"> To improve insulin resistance</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <span className="font-medium text-gray-800">Anti-androgens:</span>
                    <span className="text-gray-600"> To reduce excess hair growth and acne</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <span className="font-medium text-gray-800">Fertility Treatments:</span>
                    <span className="text-gray-600"> For women trying to conceive</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Start Your PCOS Journey Today</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of women who are taking control of their PCOS with comprehensive support and tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
              >
                Get Started Free
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
              >
                Ask Questions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
