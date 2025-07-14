"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Users,
  BookOpen,
  Stethoscope,
  Calendar,
  Music,
  Apple,
} from "lucide-react";

import enMessages from "@/../public/locales/en/common.json";
import neMessages from "@/../public/locales/ne/common.json";

type Translations = Record<string, string>;

export default function Home() {
  const [lang, setLang] = useState<"en" | "ne">("en");

  const translations: Record<"en" | "ne", Translations> = {
    en: enMessages,
    ne: neMessages,
  };

  const translated = translations[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Language Toggle */}
<section
  className="relative py-32 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url("/photos/bg.png")`,
  }}
>
  <div className="absolute inset-0 "></div>
<div className="absolute top-4 right-24">
  <button
    className="border-2 border-pink-500 text-pink-400 px-4 py-2 rounded-full"
    onClick={() => setLang(lang === "en" ? "ne" : "en")}
  >
    {lang === "en" ? "Switch to Nepali" : "Switch to English"}
  </button>
</div>

  <div className="relative max-w-7xl mx-auto text-center text-grey-600">
    <div className="mb-8">
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">
        {translated.welcome}
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        {translated.heroDescription}
      </p>
    </div>

    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
      <Link
        href="/signup"
        className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2 "
      >
        {translated.getStarted} <ArrowRight className="w-5 h-5" />
      </Link>
      <Link
        href="/learn-more"
        className="border-2 border-pink-500 text-pink-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-200 transition-all"
      >
        {translated.learnMore}
      </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <div className="bg-white/20 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
        <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-grey-600 mb-2">
          {translated.personalizedCare}
        </h3>
        <p className="text-gray-700">
          {translated.personalizedCareDesc}
        </p>
      </div>
      <div className="bg-white/20 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
        <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-grey-600 mb-2">
          {translated.communitySupport}
        </h3>
        <p className="text-gray-700">
          {translated.communitySupportDesc}
        </p>
      </div>
      <div className="bg-white/20 backdrop-blur rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
        <BookOpen className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-grey-600 mb-2">
          {translated.expertKnowledge}
        </h3>
        <p className="text-gray-700">
          {translated.expertKnowledgeDesc}
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {translated.comprehensiveSupport}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translated.comprehensiveSupportDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
              <div className="bg-gradient-to-r w-16 from-pink-100 to-purple-100 rounded-xl p-4 mb-4 group-hover:scale-110 transition-transform">
                <Stethoscope className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {translated.healthAssessment}
              </h3>
              <p className="text-gray-600">
                {translated.healthAssessmentDesc}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
              <div className="bg-gradient-to-r w-16 from-purple-100 to-indigo-100 rounded-xl p-4 mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {translated.periodTracking}
              </h3>
              <p className="text-gray-600">
                {translated.periodTrackingDesc}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
              <div className="bg-gradient-to-r w-16 from-indigo-100 to-pink-100 rounded-xl p-4 mb-4 group-hover:scale-110 transition-transform">
                <Music className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {translated.wellnessExercise}
              </h3>
              <p className="text-gray-600">
                {translated.wellnessExerciseDesc}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
              <div className="bg-gradient-to-r w-16 from-green-100 to-blue-100 rounded-xl p-4 mb-4 group-hover:scale-110 transition-transform">
                <Apple className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {translated.nutritionGuide}
              </h3>
              <p className="text-gray-600">
                {translated.nutritionGuideDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">
              {translated.readyJourney}
            </h2>
            <p className="text-xl mb-8 ">
              {translated.joinThousands}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
              >
                {translated.createFreeAccount}
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
              >
                {translated.contactUs}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
