"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, Info } from "lucide-react"

export default function Assessment() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      question: "Do you experience irregular menstrual cycles?",
      options: ["Yes, very irregular", "Sometimes irregular", "No, regular cycles", "Not sure"],
    },
    {
      question: "Have you noticed excessive hair growth on face or body?",
      options: ["Yes, significant", "Some increase", "No change", "Not applicable"],
    },
    {
      question: "Do you struggle with weight gain or difficulty losing weight?",
      options: ["Yes, significant struggle", "Some difficulty", "No issues", "Not applicable"],
    },
    {
      question: "Have you experienced acne or oily skin issues?",
      options: ["Yes, persistent", "Occasional", "Rarely", "Never"],
    },
    {
      question: "Do you have a family history of PCOS or diabetes?",
      options: ["Yes, PCOS", "Yes, diabetes", "Both", "Neither"],
    },
  ]

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers]
    newAnswers[currentStep] = answer
    setAnswers(newAnswers)

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateRisk = () => {
    const riskFactors = answers.filter(
      (answer) =>
        answer.includes("Yes") ||
        answer.includes("significant") ||
        answer.includes("persistent") ||
        answer.includes("Frequently"),
    ).length

    if (riskFactors >= 3) return "high"
    if (riskFactors >= 2) return "moderate"
    return "low"
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high":
        return "text-red-600"
      case "moderate":
        return "text-yellow-600"
      default:
        return "text-green-600"
    }
  }

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case "high":
        return <AlertCircle className="h-6 w-6 text-red-500" />
      case "moderate":
        return <Info className="h-6 w-6 text-yellow-500" />
      default:
        return <CheckCircle className="h-6 w-6 text-green-500" />
    }
  }

  if (showResults) {
    const risk = calculateRisk()

    return (
      <div className="pt-20 py-16 px-4"
       style={{
    backgroundImage: `url('/photos/bg3.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
        <div className="container mx-auto max-w-2xl" 
        > 
          <Card className="border-purple-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-purple-600">Assessment Results</CardTitle>
              <CardDescription>Based on your responses, here's your PCOS risk assessment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="flex justify-center mb-4">{getRiskIcon(risk)}</div>
                <h3 className={`text-2xl font-bold ${getRiskColor(risk)} mb-2`}>
                  {risk.charAt(0).toUpperCase() + risk.slice(1)} Risk
                </h3>
                <p className="text-gray-600">
                  {risk === "high" &&
                    "You have several symptoms that may indicate PCOS. We recommend consulting with a healthcare provider."}
                  {risk === "moderate" &&
                    "You have some symptoms that could be related to PCOS. Consider discussing with a healthcare provider."}
                  {risk === "low" && "You have few symptoms associated with PCOS, but continue monitoring your health."}
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Next Steps:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Keep track of your symptoms using our Period Tracker</li>
                  <li>• Maintain a healthy lifestyle with our Exercise & Nutrition guides</li>
                  <li>• Consider consulting with a PCOS specialist from our Doctor Directory</li>
                  <li>• Continue monitoring your health with our Dashboard</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="flex-1 bg-pink-500 hover:bg-pink-600"
                  onClick={() => (window.location.href = "/dashboard/period")}
                >
                  Start Tracking
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-purple-300 text-purple-600 bg-transparent"
                  onClick={() => (window.location.href = "/dashboard/doctors")}
                >
                  Find Doctors
                </Button>
              </div>

              <Button
                variant="ghost"
                className="w-full"
                onClick={() => {
                  setCurrentStep(0)
                  setAnswers([])
                  setShowResults(false)
                }}
              >
                Retake Assessment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 py-16 px-4"
     style={{
    backgroundImage: `url('/photos/bg3.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
      <div className="container mx-auto max-w-2xl"
      >
        <Card className="border-purple-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-purple-600">PCOS Risk Assessment</CardTitle>
            <CardDescription>Answer these questions to understand your risk factors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progress</span>
                <span>
                  {currentStep + 1} of {questions.length}
                </span>
              </div>
              <Progress value={((currentStep + 1) / questions.length) * 100} className="h-2" />
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">{questions[currentStep].question}</h3>
              <div className="space-y-3">
                {questions[currentStep].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left h-auto p-4 bg-transparent hover:bg-purple-50"
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
              >
                Previous
              </Button>
              <Badge variant="secondary">
                Question {currentStep + 1} of {questions.length}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}