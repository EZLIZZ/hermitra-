import Link from "next/link"
import { Heart, Users, Target, Award } from "lucide-react"

export default function About() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen"
       style={{
      backgroundImage:'url(/photos/bg2.png)',
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",

    }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
            About Hermitra
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Empowering women with PCOS through comprehensive support, evidence-based information, and a caring
            community.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pink-500 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To provide comprehensive, accessible, and personalized PCOS support that empowers women to take control of
              their health and live their best lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center pr-2 border-r-2">
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center animate-bounce">
                <Heart className="w-12 h-12 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Compassionate Care</h3>
              <p className="text-gray-600">
                Understanding and supporting every woman's unique PCOS journey with empathy.
              </p>
            </div>

            <div className="text-center pr-2 border-r-2">
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center animate-bounce">
                <Users className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Community First</h3>
              <p className="text-gray-600">
                Building a supportive community where women can share experiences and support each other.
              </p>
            </div>

            <div className="text-center pr-2 border-r-2">
              <div className="bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center animate-bounce">
                <Target className="w-12 h-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Evidence-Based</h3>
              <p className="text-gray-600">
                Providing information and tools backed by the latest medical research and best practices.
              </p>
            </div>

            <div className="text-center ">
              <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center animate-bounce">
                <Award className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Excellence</h3>
              <p className="text-gray-600">
                Committed to providing the highest quality resources and support for PCOS management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Hermitra was born from a simple yet powerful realization: women with PCOS needed more than just medical
                treatment—they needed comprehensive support, understanding, and a community that truly gets it.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Founded by a team of healthcare professionals, technologists, and women who have lived with PCOS,
                Hermitra combines cutting-edge technology with compassionate care to create a platform that addresses
                every aspect of PCOS management.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                From AI-powered ultrasound analysis to personalized nutrition guidance, from period tracking to expert
                consultations, we've built Hermitra to be the comprehensive companion every woman with PCOS deserves.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we're proud to serve thousands of women worldwide, helping them navigate their PCOS journey with
                confidence, knowledge, and the support of a caring community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">
              A diverse group of experts united by our commitment to women's health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">DR</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Dr. Sarah Johnson</h3>
              <p className="text-pink-600 font-medium mb-3">Chief Medical Officer</p>
              <p className="text-gray-600">
                Endocrinologist with 15+ years specializing in PCOS treatment and research.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MK</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Maria Kim</h3>
              <p className="text-purple-600 font-medium mb-3">Head of Technology</p>
              <p className="text-gray-600">AI researcher focused on medical imaging and women's health applications.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">EP</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Emily Parker</h3>
              <p className="text-indigo-600 font-medium mb-3">Community Director</p>
              <p className="text-gray-600">
                PCOS advocate and community builder with lived experience and passion for support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of a community that's changing how women experience PCOS care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
