"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Calendar,
  Heart,
  Activity,
  Moon,
  Droplets,
  Target,
  AlertCircle,
  CheckCircle,
  Plus,
  Scale,
} from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function Tracker() {
  const [selectedPeriod, setSelectedPeriod] = useState("week")
  const [newWeight, setNewWeight] = useState("")
  const [weightData, setWeightData] = useState([
    { date: "Jan 1", weight: 68, day: "Day 1" },
    { date: "Jan 8", weight: 67.5, day: "Day 8" },
    { date: "Jan 15", weight: 67, day: "Day 15" },
    { date: "Jan 22", weight: 66.5, day: "Day 22" },
    { date: "Jan 29", weight: 66, day: "Day 29" },
    { date: "Feb 5", weight: 65.8, day: "Day 36" },
    { date: "Feb 12", weight: 65.5, day: "Day 43" },
    { date: "Feb 19", weight: 65, day: "Day 50" },
  ])

  const [healthData, setHealthData] = useState({
    weight: { current: 65, change: -3, trend: "down" },
    sleep: { average: 7.5, quality: 85, trend: "up" },
    cycle: { length: 28, regularity: 85, nextPeriod: 14 },
    exercise: { weeklyGoal: 150, completed: 120, streak: 7 },
    symptoms: { mild: 3, moderate: 1, severe: 0 },
    mood: { average: 7.2, stability: 78 },
  })

  const weeklyData = [
    { day: "Mon", weight: 66, sleep: 7, exercise: 30, mood: 7 },
    { day: "Tue", weight: 65.8, sleep: 8, exercise: 45, mood: 8 },
    { day: "Wed", weight: 65.5, sleep: 6.5, exercise: 0, mood: 6 },
    { day: "Thu", weight: 65.3, sleep: 7.5, exercise: 60, mood: 7 },
    { day: "Fri", weight: 65, sleep: 8, exercise: 30, mood: 8 },
    { day: "Sat", weight: 65.2, sleep: 9, exercise: 90, mood: 9 },
    { day: "Sun", weight: 65, sleep: 7, exercise: 45, mood: 7 },
  ]

  const insights = [
    {
      type: "positive",
      title: "Great Progress!",
      message: "Your exercise consistency has improved by 40% this month.",
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
    },
    {
      type: "warning",
      title: "Sleep Pattern",
      message: "Consider maintaining a more consistent sleep schedule.",
      icon: <AlertCircle className="h-5 w-5 text-yellow-500" />,
    },
    {
      type: "info",
      title: "Cycle Prediction",
      message: "Your next period is predicted to start in 14 days.",
      icon: <Calendar className="h-5 w-5 text-blue-500" />,
    },
  ]

  const goals = [
    { name: "Weekly Exercise", current: 120, target: 150, unit: "min" },
    { name: "Daily Water", current: 6, target: 8, unit: "cups" },
    { name: "Sleep Quality", current: 85, target: 90, unit: "%" },
    { name: "Cycle Regularity", current: 85, target: 95, unit: "%" },
  ]

  const handleAddWeight = () => {
    if (newWeight && !isNaN(Number.parseFloat(newWeight))) {
      const weight = Number.parseFloat(newWeight)
      const today = new Date()
      const newEntry = {
        date: today.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        weight: weight,
        day: `Day ${weightData.length * 7 + 1}`,
      }

      setWeightData([...weightData, newEntry])

      // Update current weight and calculate change
      const previousWeight = healthData.weight.current
      const change = weight - previousWeight
      setHealthData({
        ...healthData,
        weight: {
          current: weight,
          change: Number.parseFloat(change.toFixed(1)),
          trend: change < 0 ? "down" : "up",
        },
      })

      setNewWeight("")
    }
  }

  const getWeightTrend = () => {
    if (weightData.length < 2) return { trend: "stable", percentage: 0 }

    const firstWeight = weightData[0].weight
    const lastWeight = weightData[weightData.length - 1].weight
    const change = lastWeight - firstWeight
    const percentage = ((Math.abs(change) / firstWeight) * 100).toFixed(1)

    return {
      trend: change < 0 ? "loss" : change > 0 ? "gain" : "stable",
      percentage: Number.parseFloat(percentage),
      change: Math.abs(change).toFixed(1),
    }
  }

  const weightTrend = getWeightTrend()

  return (
    <div className="pt-10 py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Health Dashboard</h1>
          <p className="text-lg text-gray-600">Track your PCOS wellness journey</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-pink-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up">
            <CardContent className="p-6 text-center">
              <BarChart3 className="h-8 w-8 text-pink-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">Weight</h3>
              <p className="text-2xl font-bold text-pink-600">{healthData.weight.current} kg</p>
              <div className="flex items-center justify-center mt-1">
                {healthData.weight.trend === "down" ? (
                  <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
                )}
                <p className="text-sm text-gray-600">
                  {healthData.weight.change > 0 ? "+" : ""}
                  {healthData.weight.change}kg this period
                </p>
              </div>
            </CardContent>
          </Card>

          <Card
            className="border-purple-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <CardContent className="p-6 text-center">
              <Moon className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">Sleep</h3>
              <p className="text-2xl font-bold text-purple-600">{healthData.sleep.average}h</p>
              <p className="text-sm text-gray-600">Quality: {healthData.sleep.quality}%</p>
            </CardContent>
          </Card>

          <Card
            className="border-pink-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-pink-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">Cycle</h3>
              <p className="text-2xl font-bold text-pink-600">{healthData.cycle.length} days</p>
              <p className="text-sm text-gray-600">{healthData.cycle.regularity}% regular</p>
            </CardContent>
          </Card>

          <Card
            className="border-green-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <CardContent className="p-6 text-center">
              <Activity className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">Exercise</h3>
              <p className="text-2xl font-bold text-green-600">{healthData.exercise.completed}min</p>
              <p className="text-sm text-gray-600">{healthData.exercise.streak} day streak</p>
            </CardContent>
          </Card>
        </div>

        {/* Weight Graph and Weight Input */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Weight Progress Chart */}
          <Card className="lg:col-span-2 border-pink-200 animate-slide-in-left">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Scale className="h-5 w-5 text-pink-500 mr-2" />
                  <span>Weight Progress</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  {weightTrend.trend === "loss" && (
                    <div className="flex items-center text-green-600">
                      <TrendingDown className="h-4 w-4 mr-1" />
                      <span>
                        {weightTrend.change}kg lost ({weightTrend.percentage}%)
                      </span>
                    </div>
                  )}
                  {weightTrend.trend === "gain" && (
                    <div className="flex items-center text-orange-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span>
                        {weightTrend.change}kg gained ({weightTrend.percentage}%)
                      </span>
                    </div>
                  )}
                  {weightTrend.trend === "stable" && (
                    <div className="flex items-center text-blue-600">
                      <Target className="h-4 w-4 mr-1" />
                      <span>Weight stable</span>
                    </div>
                  )}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weightData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="date" stroke="#666" fontSize={12} />
                    <YAxis stroke="#666" fontSize={12} domain={["dataMin - 1", "dataMax + 1"]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#fff",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                      formatter={(value:any) => [`${value} kg`, "Weight"]}
                    />
                    <Line
                      type="monotone"
                      dataKey="weight"
                      stroke="#ec4899"
                      strokeWidth={3}
                      dot={{ fill: "#ec4899", strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: "#ec4899", strokeWidth: 2, fill: "#fff" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Weight Input and Health Insights */}
          <div className="space-y-6">
            {/* Add Weight Card */}
            <Card className="border-green-200 animate-slide-in-right">
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Plus className="h-5 w-5 mr-2" />
                  Add Weight
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="weight" className="text-sm font-medium text-gray-700">
                    Current Weight (kg)
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    step="0.1"
                    placeholder="Enter weight"
                    value={newWeight}
                    onChange={(e) => setNewWeight(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <Button
                  onClick={handleAddWeight}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                  disabled={!newWeight || isNaN(Number.parseFloat(newWeight))}
                >
                  Add Weight Entry
                </Button>
                <div className="text-xs text-gray-500 text-center">Track your weight regularly for better insights</div>
              </CardContent>
            </Card>

            {/* Health Insights */}
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-600">Health Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {insights.map((insight, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg border-l-4 border-l-pink-400 bg-pink-50 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start space-x-3">
                        {insight.icon}
                        <div>
                          <h4 className="font-medium text-gray-800 text-sm">{insight.title}</h4>
                          <p className="text-xs text-gray-600 mt-1">{insight.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Weekly Overview */}
        <Card className="mb-8 border-pink-200 animate-fade-in-up">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Weekly Overview</span>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant={selectedPeriod === "week" ? "default" : "outline"}
                  onClick={() => setSelectedPeriod("week")}
                  className="bg-pink-500 hover:bg-pink-600"
                >
                  Week
                </Button>
                <Button
                  size="sm"
                  variant={selectedPeriod === "month" ? "default" : "outline"}
                  onClick={() => setSelectedPeriod("month")}
                >
                  Month
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyData.map((day, index) => (
                <div
                  key={day.day}
                  className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="font-medium text-gray-800 w-12">{day.day}</span>
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="h-4 w-4 text-pink-500" />
                      <span className="text-sm">{day.weight}kg</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Moon className="h-4 w-4 text-purple-500" />
                      <span className="text-sm">{day.sleep}h</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Activity className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{day.exercise}min</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span className="text-sm">{day.mood}/10</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Goals Progress */}
        <Card className="mb-8 border-green-200 animate-fade-in-up">
          <CardHeader>
            <CardTitle className="flex items-center text-green-600">
              <Target className="h-5 w-5 mr-2" />
              Goals Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {goals.map((goal, index) => (
                <div key={index} className="space-y-3 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-800">{goal.name}</span>
                    <span className="text-sm text-gray-600">
                      {goal.current}/{goal.target} {goal.unit}
                    </span>
                  </div>
                  <Progress value={(goal.current / goal.target) * 100} className="h-2" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{Math.round((goal.current / goal.target) * 100)}% complete</span>
                    <span>
                      {goal.target - goal.current} {goal.unit} to go
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Analytics */}
        <Tabs defaultValue="symptoms" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
            <TabsTrigger value="mood">Mood</TabsTrigger>
            <TabsTrigger value="cycle">Cycle</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="symptoms" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200 animate-fade-in-up">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">Mild</h3>
                  <p className="text-2xl font-bold text-green-600">{healthData.symptoms.mild}</p>
                  <p className="text-sm text-gray-600">This week</p>
                </CardContent>
              </Card>

              <Card className="border-yellow-200 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-6 text-center">
                  <AlertCircle className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">Moderate</h3>
                  <p className="text-2xl font-bold text-yellow-600">{healthData.symptoms.moderate}</p>
                  <p className="text-sm text-gray-600">This week</p>
                </CardContent>
              </Card>

              <Card className="border-red-200 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-6 text-center">
                  <AlertCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">Severe</h3>
                  <p className="text-2xl font-bold text-red-600">{healthData.symptoms.severe}</p>
                  <p className="text-sm text-gray-600">This week</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="mood" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-pink-200 animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="text-pink-600">Mood Average</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-pink-600 mb-2">{healthData.mood.average}/10</p>
                    <p className="text-gray-600">This week</p>
                    <div className="mt-4">
                      <Progress value={healthData.mood.average * 10} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <CardTitle className="text-purple-600">Mood Stability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-purple-600 mb-2">{healthData.mood.stability}%</p>
                    <p className="text-gray-600">Consistency score</p>
                    <div className="mt-4">
                      <Progress value={healthData.mood.stability} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="cycle" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-pink-200 animate-fade-in-up">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-pink-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">Cycle Length</h3>
                  <p className="text-2xl font-bold text-pink-600">{healthData.cycle.length} days</p>
                  <p className="text-sm text-gray-600">Average</p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">Regularity</h3>
                  <p className="text-2xl font-bold text-purple-600">{healthData.cycle.regularity}%</p>
                  <p className="text-sm text-gray-600">Consistency</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-6 text-center">
                  <Droplets className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800">Next Period</h3>
                  <p className="text-2xl font-bold text-blue-600">{healthData.cycle.nextPeriod} days</p>
                  <p className="text-sm text-gray-600">Predicted</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <Card className="border-green-200 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="text-green-600">Health Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-600">Weight Management</span>
                    <div className="flex items-center">
                      <TrendingDown className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-green-600 font-medium">Improving</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-600">Sleep Quality</span>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-blue-500 mr-2" />
                      <span className="text-blue-600 font-medium">Stable</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-gray-600">Exercise Consistency</span>
                    <div className="flex items-center">
                      <TrendingUp className="h-4 w-4 text-purple-500 mr-2" />
                      <span className="text-purple-600 font-medium">Excellent</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                    <span className="text-gray-600">Symptom Severity</span>
                    <div className="flex items-center">
                      <TrendingDown className="h-4 w-4 text-pink-500 mr-2" />
                      <span className="text-pink-600 font-medium">Decreasing</span>
                    </div>
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