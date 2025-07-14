"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Activity, Play, Pause, CheckCircle, Clock, Flame, Target, Heart, Zap, Award } from "lucide-react"

export default function ExercisePage() {
  const [completedExercises, setCompletedExercises] = useState<string[]>([])
  const [currentWorkout, setCurrentWorkout] = useState<string | null>(null)
  const [workoutTime, setWorkoutTime] = useState(0)
  const [isWorkoutActive, setIsWorkoutActive] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isWorkoutActive && currentWorkout) {
      interval = setInterval(() => {
        setWorkoutTime((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isWorkoutActive, currentWorkout])

  const exercises = [
    {
      id: "yoga-flow",
      name: "Morning Yoga Flow",
      duration: "15 min",
      difficulty: "Beginner",
      calories: 45,
      type: "Yoga",
      description: "Gentle morning routine to start your day",
      benefits: ["Improves flexibility", "Reduces stress", "Boosts energy"],
    },
    {
      id: "hiit-cardio",
      name: "HIIT Cardio",
      duration: "20 min",
      difficulty: "Intermediate",
      calories: 180,
      type: "Cardio",
      description: "High-intensity interval training",
      benefits: ["Burns calories", "Improves metabolism", "Builds endurance"],
    },
    {
      id: "strength-training",
      name: "Strength Training",
      duration: "30 min",
      difficulty: "Intermediate",
      calories: 120,
      type: "Strength",
      description: "Build lean muscle mass",
      benefits: ["Increases strength", "Improves bone density", "Boosts metabolism"],
    },
    {
      id: "evening-meditation",
      name: "Evening Meditation",
      duration: "10 min",
      difficulty: "Beginner",
      calories: 15,
      type: "Mindfulness",
      description: "Relaxing meditation for better sleep",
      benefits: ["Reduces anxiety", "Improves sleep", "Promotes relaxation"],
    },
  ]

  const yogaVideos = [
    {
      id: "morning-flow",
      title: "PCOS Morning Flow",
      duration: "15 min",
      difficulty: "Beginner",
      instructor: "Sarah Johnson",
      views: "2.3K",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "hormone-balance",
      title: "Hormone Balance Yoga",
      duration: "20 min",
      difficulty: "Intermediate",
      instructor: "Maya Patel",
      views: "1.8K",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "stress-relief",
      title: "Stress Relief & Relaxation",
      duration: "25 min",
      difficulty: "Beginner",
      instructor: "Lisa Chen",
      views: "3.1K",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
  ]

  const handleStartWorkout = (exerciseId: string) => {
    setCurrentWorkout(exerciseId)
    setIsWorkoutActive(true)
    setWorkoutTime(0)
  }

  const handleCompleteWorkout = () => {
    if (currentWorkout) {
      setCompletedExercises((prev) => [...prev, currentWorkout])
      setCurrentWorkout(null)
      setIsWorkoutActive(false)
      setWorkoutTime(0)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Yoga":
        return <Heart className="h-4 w-4" />
      case "Cardio":
        return <Zap className="h-4 w-4" />
      case "Strength":
        return <Target className="h-4 w-4" />
      case "Mindfulness":
        return <Activity className="h-4 w-4" />
      default:
        return <Activity className="h-4 w-4" />
    }
  }

  return (
    <div className="pt-10 py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Exercise & Yoga Tracker</h1>
          <p className="text-lg text-gray-600">PCOS friendly workouts and yogas</p>
        </div>

        {/* Current Workout Timer */}
        {currentWorkout && (
          <Card className="mb-8 border-pink-200 bg-gradient-to-r from-pink-50 to-purple-50 animate-slide-in-down">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {exercises.find((e) => e.id === currentWorkout)?.name}
                  </h3>
                  <p className="text-gray-600">Workout in progress</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">{formatTime(workoutTime)}</div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => setIsWorkoutActive(!isWorkoutActive)}>
                      {isWorkoutActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button size="sm" className="bg-green-500 hover:bg-green-600" onClick={handleCompleteWorkout}>
                      Complete
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Daily Progress */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-pink-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up">
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 text-pink-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">Completed</h3>
              <p className="text-2xl font-bold text-pink-600">{completedExercises.length}</p>
              <p className="text-sm text-gray-600">Today</p>
            </CardContent>
          </Card>

          <Card
            className="border-purple-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <CardContent className="p-6 text-center">
              <Flame className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">Calories</h3>
              <p className="text-2xl font-bold text-orange-600">
                {completedExercises.reduce((total, id) => {
                  const exercise = exercises.find((e) => e.id === id)
                  return total + (exercise?.calories || 0)
                }, 0)}
              </p>
              <p className="text-sm text-gray-600">Burned</p>
            </CardContent>
          </Card>

          <Card
            className="border-green-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">Time</h3>
              <p className="text-2xl font-bold text-green-600">
                {completedExercises.reduce((total, id) => {
                  const exercise = exercises.find((e) => e.id === id)
                  return total + Number.parseInt(exercise?.duration || "0")
                }, 0)}{" "}
                min
              </p>
              <p className="text-sm text-gray-600">Active</p>
            </CardContent>
          </Card>

          <Card
            className="border-blue-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <CardContent className="p-6 text-center">
              <Target className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">Streak</h3>
              <p className="text-2xl font-bold text-blue-600">7</p>
              <p className="text-sm text-gray-600">Days</p>
            </CardContent>
          </Card>
        </div>

        {/* Exercise Routines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="border-pink-200 animate-slide-in-left">
            <CardHeader>
              <CardTitle className="flex items-center text-pink-600">
                <Activity className="h-5 w-5 mr-2" />
                Daily Routines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {exercises.map((exercise, index) => (
                  <div
                    key={exercise.id}
                    className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="flex items-center mr-3">
                          {completedExercises.includes(exercise.id) ? (
                            <CheckCircle className="h-6 w-6 text-green-500 animate-bounce" />
                          ) : (
                            <div className="h-6 w-6 border-2 border-gray-300 rounded-full" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">{exercise.name}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge className={getDifficultyColor(exercise.difficulty)}>{exercise.difficulty}</Badge>
                            <Badge variant="outline" className="flex items-center">
                              {getTypeIcon(exercise.type)}
                              <span className="ml-1">{exercise.type}</span>
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">{exercise.duration}</p>
                        <p className="text-xs text-gray-500">{exercise.calories} cal</p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-3">{exercise.description}</p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {exercise.benefits.map((benefit, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      size="sm"
                      className={`w-full transition-all duration-200 ${
                        completedExercises.includes(exercise.id)
                          ? "bg-green-500 hover:bg-green-600"
                          : currentWorkout === exercise.id
                            ? "bg-orange-500 hover:bg-orange-600"
                            : "bg-pink-500 hover:bg-pink-600"
                      }`}
                      onClick={() => !completedExercises.includes(exercise.id) && handleStartWorkout(exercise.id)}
                      disabled={completedExercises.includes(exercise.id)}
                    >
                      {completedExercises.includes(exercise.id)
                        ? "Completed"
                        : currentWorkout === exercise.id
                          ? "In Progress"
                          : "Start Workout"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Yoga Videos */}
          <Card className="border-purple-200 animate-slide-in-right">
            <CardHeader>
              <CardTitle className="text-purple-600">Yoga for PCOS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {yogaVideos.map((video, index) => (
                  <div
                    key={video.id}
                    className="relative bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 mb-1">{video.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">by {video.instructor}</p>
                        <div className="flex items-center space-x-2 mb-3">
                          <Badge variant="outline">{video.duration}</Badge>
                          <Badge className={getDifficultyColor(video.difficulty)}>{video.difficulty}</Badge>
                          <span className="text-xs text-gray-500">{video.views} views</span>
                        </div>
                        <Button
                          size="sm"
                          className="bg-purple-500 hover:bg-purple-600 transform hover:scale-105 transition-all duration-200"
                        >
                          <Play className="h-4 w-4 mr-1" />
                          Play Video
                        </Button>
                      </div>
                      <div className="ml-4">
                        <div className="w-20 h-16 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg flex items-center justify-center">
                          <Play className="h-6 w-6 text-purple-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Progress */}
        <Card className="border-pink-200 animate-fade-in-up">
          <CardHeader>
            <CardTitle>Weekly Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Exercise Goal</span>
                <div className="flex items-center space-x-2">
                  <Progress value={75} className="w-32" />
                  <span className="text-sm font-medium">75%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Calories Burned</span>
                <div className="flex items-center space-x-2">
                  <Progress value={60} className="w-32" />
                  <span className="text-sm font-medium">60%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Active Minutes</span>
                <div className="flex items-center space-x-2">
                  <Progress value={85} className="w-32" />
                  <span className="text-sm font-medium">85%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}