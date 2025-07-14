"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  ArrowLeft,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Repeat,
  Shuffle,
  Download,
  Moon,
  Waves,
  Leaf,
  Brain,
  Sparkles,
} from "lucide-react"

interface AudioTrack {
  id: number
  title: string
  artist: string
  duration: number
  category: "Relaxation" | "Sleep" | "Focus" | "Healing" | "Meditation"
  description: string
  benefits: string[]
  frequency: string
  image: string
  audioUrl: string
  color: string
}

const audioTracks: AudioTrack[] = [
  {
    id: 1,
    title: "Hormonal Balance Frequencies",
    artist: "Dr. Wellness",
    duration: 1800,
    category: "Healing",
    description: "Binaural beats designed to support hormonal balance and reduce PCOS symptoms",
    benefits: ["Balances hormones", "Reduces stress", "Improves sleep quality"],
    frequency: "40Hz - 60Hz",
    image: "/placeholder.svg?height=200&width=200",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    color: "from-pink-500 to-purple-500",
  },
  {
    id: 2,
    title: "Deep Relaxation Ocean Waves",
    artist: "Nature Sounds",
    duration: 2400,
    category: "Relaxation",
    description: "Calming ocean waves to reduce cortisol levels and promote relaxation",
    benefits: ["Reduces cortisol", "Promotes relaxation", "Lowers blood pressure"],
    frequency: "Natural",
    image: "/placeholder.svg?height=200&width=200",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    color: "from-blue-500 to-teal-500",
  },
  {
    id: 3,
    title: "Insulin Sensitivity Boost",
    artist: "Healing Frequencies",
    duration: 1200,
    category: "Healing",
    description: "Specific frequencies to support insulin sensitivity and metabolic health",
    benefits: ["Improves insulin sensitivity", "Boosts metabolism", "Supports weight management"],
    frequency: "528Hz",
    image: "/placeholder.svg?height=200&width=200",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Peaceful Forest Meditation",
    artist: "Mindful Moments",
    duration: 1800,
    category: "Meditation",
    description: "Guided meditation with forest sounds for stress reduction and mindfulness",
    benefits: ["Reduces anxiety", "Improves focus", "Enhances mindfulness"],
    frequency: "Natural + 432Hz",
    image: "/placeholder.svg?height=200&width=200",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    color: "from-green-400 to-lime-500",
  },
  {
    id: 5,
    title: "Fertility Enhancement Tones",
    artist: "Reproductive Wellness",
    duration: 2100,
    category: "Healing",
    description: "Subliminal frequencies to support reproductive health and fertility",
    benefits: ["Supports fertility", "Balances reproductive hormones", "Reduces inflammation"],
    frequency: "741Hz",
    image: "/placeholder.svg?height=200&width=200",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    color: "from-rose-500 to-pink-500",
  },
  {
    id: 6,
    title: "Deep Sleep PCOS Recovery",
    artist: "Sleep Therapy",
    duration: 3600,
    category: "Sleep",
    description: "Extended sleep therapy session for overnight healing and recovery",
    benefits: ["Improves sleep quality", "Supports overnight healing", "Reduces inflammation"],
    frequency: "Delta waves 0.5-4Hz",
    image: "/placeholder.svg?height=200&width=200",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    color: "from-indigo-500 to-purple-500",
  },
]

const tips = [
  {
    title: "Best Time to Listen",
    content: "Listen to healing frequencies in the morning or before bed for maximum benefit.",
    icon: Moon,
  },
  {
    title: "Use Headphones",
    content: "For binaural beats, use stereo headphones to experience the full effect.",
    icon: Brain,
  },
  {
    title: "Consistent Practice",
    content: "Listen daily for 2-4 weeks to notice significant improvements in symptoms.",
    icon: Sparkles,
  },
  {
    title: "Comfortable Environment",
    content: "Find a quiet, comfortable space where you won't be disturbed.",
    icon: Leaf,
  },
]

export default function SoundsPage() {
  const [currentTrack, setCurrentTrack] = useState<AudioTrack | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState([75])
  const [isMuted, setIsMuted] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const [isShuffle, setIsShuffle] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const handleEnded = () => {
      if (isRepeat) {
        audio.currentTime = 0
        audio.play()
      } else {
        setIsPlaying(false)
        setCurrentTime(0)
      }
    }

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [isRepeat])

  const playTrack = (track: AudioTrack) => {
    setCurrentTrack(track)
    setCurrentTime(0)
    setIsPlaying(true)
  }

  const togglePlayPause = () => {
    const audio = audioRef.current
    if (!audio || !currentTrack) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const skipForward = () => {
    const currentIndex = audioTracks.findIndex((track) => track.id === currentTrack?.id)
    const nextIndex = (currentIndex + 1) % audioTracks.length
    playTrack(audioTracks[nextIndex])
  }

  const skipBackward = () => {
    const currentIndex = audioTracks.findIndex((track) => track.id === currentTrack?.id)
    const prevIndex = currentIndex === 0 ? audioTracks.length - 1 : currentIndex - 1
    playTrack(audioTracks[prevIndex])
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleVolumeChange = (value: number[]) => {
    setVolume(value)
    if (audioRef.current) {
      audioRef.current.volume = value[0] / 100
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
    }
  }

  const categories = ["all", "Relaxation", "Sleep", "Focus", "Healing", "Meditation"]
  const filteredTracks =
    selectedCategory === "all" ? audioTracks : audioTracks.filter((track) => track.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 via-pink-50 to-rose-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-lg shadow-lg border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="relative">
                <Heart className="h-8 w-8 text-pink-600 animate-pulse" />
                <Waves className="h-4 w-4 text-blue-500 absolute -top-1 -right-1 animate-bounce" />
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Hermitra Sounds
              </span>
            </div>
            <Link href="/dashboard">
              <Button variant="outline" className="hover:bg-pink-50 transition-all duration-300 bg-white/80">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="relative inline-block">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Subliminal Healing Sounds
            </h1>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Therapeutic audio sessions designed to support PCOS healing through binaural beats, nature sounds, and
            subliminal frequencies that promote hormonal balance and stress reduction.
          </p>
        </div>

        {/* Audio Player */}
        {currentTrack && (
          <Card className="mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white animate-fade-in-up">
            <CardContent className="p-8">
              <div className="flex items-center space-x-6">
                <img
                  src={currentTrack.image || "/placeholder.svg"}
                  alt={currentTrack.title}
                  className="w-20 h-20 rounded-lg shadow-lg"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{currentTrack.title}</h3>
                  <p className="text-white/80 mb-4">{currentTrack.artist}</p>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <Slider
                      value={[currentTrack ? (currentTime / currentTrack.duration) * 100 : 0]}
                      max={100}
                      step={1}
                      className="w-full"
                      onValueChange={(value) => {
                        if (audioRef.current && currentTrack) {
                          const newTime = (value[0] / 100) * currentTrack.duration
                          audioRef.current.currentTime = newTime
                          setCurrentTime(newTime)
                        }
                      }}
                    />
                    <div className="flex justify-between text-sm text-white/80">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(currentTrack.duration)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center space-x-6 mt-6">
                <Button
                  onClick={() => setIsShuffle(!isShuffle)}
                  variant="ghost"
                  size="sm"
                  className={`text-white hover:bg-white/20 ${isShuffle ? "bg-white/20" : ""}`}
                >
                  <Shuffle className="h-4 w-4" />
                </Button>
                <Button onClick={skipBackward} variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <SkipBack className="h-5 w-5" />
                </Button>
                <Button
                  onClick={togglePlayPause}
                  size="lg"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 w-14 h-14 rounded-full"
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </Button>
                <Button onClick={skipForward} variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <SkipForward className="h-5 w-5" />
                </Button>
                <Button
                  onClick={() => setIsRepeat(!isRepeat)}
                  variant="ghost"
                  size="sm"
                  className={`text-white hover:bg-white/20 ${isRepeat ? "bg-white/20" : ""}`}
                >
                  <Repeat className="h-4 w-4" />
                </Button>
              </div>

              {/* Volume Control */}
              <div className="flex items-center justify-center space-x-4 mt-4">
                <Button onClick={toggleMute} variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
                <Slider value={volume} onValueChange={handleVolumeChange} max={100} step={1} className="w-32" />
                <span className="text-sm text-white/80 w-8">{volume[0]}%</span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-6 bg-white/80 backdrop-blur-sm">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
              >
                {category === "all" ? "All Tracks" : category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredTracks.map((track, index) => (
            <Card
              key={track.id}
              className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up animation-delay-${index * 100} overflow-hidden bg-white/80 backdrop-blur-sm ${
                currentTrack?.id === track.id ? "ring-2 ring-purple-400 bg-purple-50" : ""
              }`}
            >
              <div className="relative">
                <div className={`h-48 bg-gradient-to-br ${track.color} flex items-center justify-center`}>
                  <img
                    src={track.image || "/placeholder.svg"}
                    alt={track.title}
                    className="w-32 h-32 rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className={`bg-gradient-to-r ${track.color} text-white border-none`}>{track.category}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
                  {formatTime(track.duration)}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-lg">{track.title}</CardTitle>
                <CardDescription className="text-sm">{track.artist}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">{track.description}</p>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Frequency:</span>
                      <Badge variant="outline" className="text-xs">
                        {track.frequency}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {track.benefits.map((benefit, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={() => playTrack(track)}
                    className={`w-full bg-gradient-to-r ${track.color} hover:opacity-90 transform hover:scale-105 transition-all duration-300`}
                    disabled={currentTrack?.id === track.id && isPlaying}
                  >
                    {currentTrack?.id === track.id && isPlaying ? (
                      <>
                        <Pause className="h-4 w-4 mr-2" />
                        Playing
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Play Track
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tips Section */}
        <Card className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-purple-200 animate-fade-in-up animation-delay-500">
          <CardHeader>
            <CardTitle className="text-center text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Tips for Maximum Benefit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tips.map((tip, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <tip.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{tip.title}</h3>
                  <p className="text-sm text-gray-600">{tip.content}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Hidden Audio Element */}
        <audio
          ref={audioRef}
          src={currentTrack?.audioUrl}
          onLoadedData={() => {
            if (audioRef.current && isPlaying) {
              audioRef.current.play()
            }
          }}
        />
      </div>
    </div>
  )
}
