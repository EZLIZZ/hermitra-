"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Heart, Droplets, Moon } from "lucide-react";

// ✅ Import locale if your Calendar supports it
import { enUS } from "date-fns/locale";

export default function Period() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMood, setSelectedMood] = useState("");
  const [symptoms, setSymptoms] = useState("");

  // Period dates - 4 consecutive days with light pink shadow
  const periodDates = [
    new Date(2024, 11, 15), // Dec 15
    new Date(2024, 11, 16), // Dec 16
    new Date(2024, 11, 17), // Dec 17
    new Date(2024, 11, 18), // Dec 18
  ];

  const moods = [
    { emoji: "😊", label: "Happy", value: "happy" },
    { emoji: "😔", label: "Sad", value: "sad" },
    { emoji: "😤", label: "Irritated", value: "irritated" },
    { emoji: "😴", label: "Tired", value: "tired" },
    { emoji: "😰", label: "Anxious", value: "anxious" },
    { emoji: "🤗", label: "Content", value: "content" },
  ];

  const commonSymptoms = [
    "Cramps",
    "Bloating",
    "Headache",
    "Mood swings",
    "Fatigue",
    "Acne",
    "Hair loss",
    "Weight gain",
    "Irregular bleeding",
  ];

  return (
    <div className="pt-10 py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Period Tracker
          </h1>
          <p className="text-lg text-gray-600">
            Track your cycle, symptoms, and mood patterns
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Calendar */}
          <Card className=" py-0 border-pink-200 shadow-lg lg:col-span-1">
            <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 py-2">
              <CardTitle className="flex items-center text-pink-600">
                <CalendarIcon className="h-5 w-5 mr-2" />
                Cycle Calendar
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 flex flex-col items-center">
              <div className="w-full max-w-sm">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  locale={enUS} // ✅ Ensures date formats match SSR/CSR
                  modifiers={{
                    period: periodDates,
                  }}
                  modifiersStyles={{
                    period: {
                      backgroundColor: "#fdf2f8",
                      color: "#ec4899",
                      fontWeight: "600",
                      boxShadow:
                        "0 0 0 1px #f9a8d4, 0 2px 8px rgba(244, 114, 182, 0.3)",
                      borderRadius: "8px",
                    },
                  }}
                  className="w-full mx-auto
                    [&_table]:w-full [&_table]:max-w-none
                    [&_th]:h-12 [&_th]:w-12 [&_th]:text-sm [&_th]:font-semibold [&_th]:text-gray-600
                    [&_td]:h-12 [&_td]:w-12 [&_td]:p-0
                    [&_button]:h-10 [&_button]:w-10 [&_button]:text-sm [&_button]:font-medium [&_button]:rounded-xl [&_button]:transition-all [&_button]:duration-200
                    [&_button:hover]:bg-pink-100 [&_button:hover]:text-pink-700 [&_button:hover]:scale-105
                    [&_[aria-selected=true]]:bg-pink-500 [&_[aria-selected=true]]:text-white [&_[aria-selected=true]]:font-bold [&_[aria-selected=true]]:shadow-lg [&_[aria-selected=true]]:scale-105
                    [&_.rdp-day_today]:bg-purple-100 [&_.rdp-day_today]:text-purple-700 [&_.rdp-day_today]:font-bold [&_.rdp-day_today]:ring-2 [&_.rdp-day_today]:ring-purple-400 [&_.rdp-day_today]:shadow-md
                    [&_.rdp-head_cell]:text-center [&_.rdp-head_cell]:font-semibold [&_.rdp-head_cell]:text-gray-600
                    [&_.rdp-nav_button]:h-8 [&_.rdp-nav_button]:w-8 [&_.rdp-nav_button]:rounded-lg [&_.rdp-nav_button]:hover:bg-pink-100
                    [&_.rdp-caption]:text-lg [&_.rdp-caption]:font-bold [&_.rdp-caption]:text-gray-700 [&_.rdp-caption]:mb-4"
                />
              </div>

              <div className="mt-8 w-full space-y-4 bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-3">Legend</h4>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-5 h-5 bg-pink-50 border border-pink-300 rounded shadow-sm"
                      style={{
                        boxShadow: "0 2px 4px rgba(244, 114, 182, 0.3)",
                      }}
                    ></div>
                    <span className="text-sm text-gray-700 font-medium">
                      Period days (4 days)
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-pink-300 rounded-full shadow-sm"></div>
                    <span className="text-sm text-gray-700 font-medium">
                      Fertile window
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-purple-300 rounded-full shadow-sm"></div>
                    <span className="text-sm text-gray-700 font-medium">
                      Ovulation
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-purple-100 rounded-full border-2 border-purple-400"></div>
                    <span className="text-sm text-gray-700 font-medium">
                      Today
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Daily Log */}
          <Card className="border-pink-200 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl">Daily Log</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-3 block">
                  How are you feeling today?
                </Label>
                <div className="grid grid-cols-3 gap-2">
                  {moods.map((mood) => (
                    <Button
                      key={mood.value}
                      variant={
                        selectedMood === mood.value ? "default" : "outline"
                      }
                      className={`h-auto p-3 flex flex-col items-center space-y-1 ${
                        selectedMood === mood.value
                          ? "bg-pink-500 hover:bg-pink-600"
                          : "hover:bg-pink-50"
                      }`}
                      onClick={() => setSelectedMood(mood.value)}
                    >
                      <span className="text-2xl">{mood.emoji}</span>
                      <span className="text-xs">{mood.label}</span>
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">
                  Common Symptoms
                </Label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {commonSymptoms.map((symptom) => (
                    <Badge
                      key={symptom}
                      variant="outline"
                      className="cursor-pointer hover:bg-purple-50 border-purple-200"
                    >
                      {symptom}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="symptoms" className="text-base font-medium">
                  Additional Notes
                </Label>
                <Textarea
                  id="symptoms"
                  placeholder="Describe any other symptoms or notes..."
                  className="border-pink-200 focus:border-pink-400 mt-2"
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                />
              </div>

              <Button className="w-full bg-pink-500 hover:bg-pink-600">
                Save Entry
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Cycle Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-pink-200">
            <CardContent className="p-6 text-center">
              <Heart className="h-8 w-8 text-pink-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">Current Cycle</h3>
              <p className="text-2xl font-bold text-pink-600">Day 14</p>
              <p className="text-sm text-gray-600">28-day average</p>
            </CardContent>
          </Card>

          <Card className="border-purple-200">
            <CardContent className="p-6 text-center">
              <Droplets className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">Next Period</h3>
              <p className="text-2xl font-bold text-purple-600">14 days</p>
              <p className="text-sm text-gray-600">Estimated</p>
            </CardContent>
          </Card>

          <Card className="border-pink-200">
            <CardContent className="p-6 text-center">
              <Moon className="h-8 w-8 text-pink-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">Fertile Window</h3>
              <p className="text-2xl font-bold text-pink-600">5 days</p>
              <p className="text-sm text-gray-600">Starting tomorrow</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
