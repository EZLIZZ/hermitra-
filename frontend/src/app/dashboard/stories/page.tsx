"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Heart, ArrowLeft, MessageCircle, Share2, BookOpen, Calendar } from "lucide-react"

interface Story {
  id: number
  title: string
  author: string
  avatar: string
  age: number
  location: string
  diagnosis: string
  timeframe: string
  category: "Success" | "Journey" | "Tips" | "Support"
  excerpt: string
  content: string
  tags: string[]
  likes: number
  comments: number
  date: string
  featured: boolean
}

interface Comment {
  id: number
  author: string
  avatar: string
  content: string
  date: string
  likes: number
}

const stories: Story[] = [
  {
    id: 1,
    title: "From Diagnosis to Thriving: My 2-Year PCOS Journey",
    author: "Sarah M.",
    avatar: "/placeholder.svg?height=40&width=40",
    age: 28,
    location: "California, USA",
    diagnosis: "PCOS with insulin resistance",
    timeframe: "2 years ago",
    category: "Success",
    excerpt: "How I transformed my health through lifestyle changes and found hope again...",
    content: `Two years ago, I was diagnosed with PCOS after struggling with irregular periods, weight gain, and fatigue for years. I felt overwhelmed and scared, but I decided to take control of my health.

**My Journey:**
- Started with a low-carb, anti-inflammatory diet
- Incorporated regular exercise (yoga and strength training)
- Worked with a nutritionist and endocrinologist
- Practiced stress management through meditation

**Results after 18 months:**
- Lost 35 pounds naturally
- Regular periods for the first time in years
- Improved energy levels
- Better mood and mental health
- Reduced acne and hair growth

**Key Learnings:**
The most important thing I learned is that PCOS is manageable. It takes time, patience, and consistency, but you can feel amazing again. Don't give up on yourself!

**My advice:** Start small, be consistent, and celebrate every victory. You've got this! 💪`,
    tags: ["weight-loss", "lifestyle-change", "success-story", "motivation"],
    likes: 247,
    comments: 89,
    date: "2024-01-10",
    featured: true,
  },
  {
    id: 2,
    title: "Fertility Success: Conceiving with PCOS",
    author: "Emma L.",
    avatar: "/placeholder.svg?height=40&width=40",
    age: 32,
    location: "London, UK",
    diagnosis: "PCOS with anovulation",
    timeframe: "3 years ago",
    category: "Success",
    excerpt: "After 3 years of trying, I'm now a proud mom of twins! Here's how I did it...",
    content: `After being told that conceiving with PCOS would be difficult, I'm thrilled to share that I'm now a mom to beautiful twin girls!

**My Fertility Journey:**
- Worked with a reproductive endocrinologist
- Used Metformin to improve insulin sensitivity
- Tracked ovulation religiously
- Made significant dietary changes
- Took targeted supplements (inositol, folic acid, vitamin D)

**What Worked:**
- Mediterranean diet with low glycemic foods
- Regular exercise but not too intense
- Stress reduction through yoga and counseling
- Consistent sleep schedule
- Strong support system

**The Breakthrough:**
After 18 months of lifestyle changes, my cycles became more regular. We conceived naturally on our 4th cycle of trying after implementing all these changes.

**Message of Hope:**
PCOS doesn't mean you can't have children. With the right support and approach, many women with PCOS can conceive. Don't lose hope! 👶👶`,
    tags: ["fertility", "pregnancy", "twins", "hope", "natural-conception"],
    likes: 312,
    comments: 156,
    date: "2024-01-08",
    featured: true,
  },
  {
    id: 3,
    title: "Managing PCOS in College: A Student's Guide",
    author: "Maya P.",
    avatar: "/placeholder.svg?height=40&width=40",
    age: 21,
    location: "Toronto, Canada",
    diagnosis: "PCOS diagnosed at 19",
    timeframe: "2 years ago",
    category: "Tips",
    excerpt: "Balancing studies, social life, and PCOS management as a college student...",
    content: `Being diagnosed with PCOS during my sophomore year was challenging, but I've learned to manage it while maintaining my academic and social life.

**College-Friendly PCOS Tips:**

**Dorm Room Essentials:**
- Mini fridge stocked with healthy snacks
- Protein bars and nuts for quick energy
- Herbal teas for stress relief
- Resistance bands for quick workouts

**Meal Planning on a Budget:**
- Batch cook quinoa and brown rice
- Buy frozen vegetables (just as nutritious!)
- Eggs are cheap protein
- Meal prep on Sundays

**Managing Stress:**
- Use campus counseling services
- Join study groups for support
- Practice 10-minute meditations between classes
- Regular sleep schedule (even on weekends!)

**Social Life Balance:**
- Choose restaurants with healthy options
- Suggest active hangouts (hiking, dancing)
- Be open with close friends about your needs

**Campus Resources:**
- Health center for regular check-ups
- Gym membership included in tuition
- Nutrition counseling services
- Mental health support

College with PCOS is totally doable! You just need to be a bit more intentional about your choices. 🎓`,
    tags: ["college", "student-life", "budget-friendly", "tips", "young-adult"],
    likes: 189,
    comments: 67,
    date: "2024-01-05",
    featured: false,
  },
  {
    id: 4,
    title: "Finding My Tribe: The Power of PCOS Community",
    author: "Rachel K.",
    avatar: "/placeholder.svg?height=40&width=40",
    age: 35,
    location: "Sydney, Australia",
    diagnosis: "PCOS for 10+ years",
    timeframe: "Long-term journey",
    category: "Support",
    excerpt: "How connecting with other women transformed my PCOS experience...",
    content: `For years, I felt alone in my PCOS journey. I thought I was the only one struggling with these symptoms until I found my PCOS community.

**The Isolation:**
- Felt embarrassed about symptoms
- Thought I was "broken" or "different"
- Struggled with self-image and confidence
- Didn't know where to turn for support

**Finding Community:**
- Joined online PCOS support groups
- Attended local meetups
- Connected with women who "got it"
- Shared experiences and tips

**The Transformation:**
- Realized I wasn't alone
- Learned from others' experiences
- Found accountability partners
- Built lasting friendships
- Gained confidence to advocate for myself

**What I've Learned:**
- Every PCOS journey is unique
- There's no "one size fits all" solution
- Support makes all the difference
- Sharing your story helps others
- We're stronger together

**My Message:**
Don't suffer in silence. Reach out, connect, and remember that there are thousands of women who understand exactly what you're going through. You are not alone! 🤗

**Resources that helped me:**
- PCOS support groups on social media
- Local PCOS meetups
- Online forums and communities
- PCOS awareness organizations`,
    tags: ["community", "support", "mental-health", "connection", "advocacy"],
    likes: 156,
    comments: 94,
    date: "2024-01-03",
    featured: false,
  },
]

const sampleComments: Comment[] = [
  {
    id: 1,
    author: "Jessica R.",
    avatar: "/placeholder.svg?height=32&width=32",
    content: "Thank you so much for sharing this! I'm just starting my journey and this gives me so much hope. 💕",
    date: "2024-01-11",
    likes: 12,
  },
  {
    id: 2,
    author: "Amanda T.",
    avatar: "/placeholder.svg?height=32&width=32",
    content:
      "Your story is so inspiring! I've been struggling with similar symptoms. Can you share more about your diet changes?",
    date: "2024-01-11",
    likes: 8,
  },
]

export default function StoriesPage() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [newComment, setNewComment] = useState("")
  const [showShareForm, setShowShareForm] = useState(false)
  const [newStory, setNewStory] = useState({
    title: "",
    content: "",
    category: "Journey" as Story["category"],
    tags: "",
  })

  const categories = ["all", "Success", "Journey", "Tips", "Support"]

  const filteredStories =
    selectedCategory === "all" ? stories : stories.filter((story) => story.category === selectedCategory)

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      // In a real app, this would submit to an API
      console.log("New comment:", newComment)
      setNewComment("")
    }
  }

  const handleSubmitStory = () => {
    if (newStory.title && newStory.content) {
      // In a real app, this would submit to an API
      console.log("New story:", newStory)
      setNewStory({ title: "", content: "", category: "Journey", tags: "" })
      setShowShareForm(false)
    }
  }

  if (selectedStory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 via-rose-50 to-orange-50">
        {/* Navigation */}
        <nav className="bg-white/90 backdrop-blur-lg shadow-lg border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="relative">
                  <Heart className="h-8 w-8 text-purple-600 animate-pulse" />
                  <BookOpen className="h-4 w-4 text-pink-500 absolute -top-1 -right-1 animate-bounce" />
                </div>
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Hermitra Stories
                </span>
              </div>
              <Button
                variant="outline"
                onClick={() => setSelectedStory(null)}
                className="hover:bg-purple-50 transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Stories
              </Button>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Story Header */}
          <div className="mb-8 animate-fade-in-up">
            <div className="flex items-center space-x-4 mb-6">
              <Avatar className="w-16 h-16">
                <AvatarImage src={selectedStory.avatar || "/placeholder.svg"} />
                <AvatarFallback>{selectedStory.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-bold text-lg">{selectedStory.author}</h3>
                <p className="text-gray-600">
                  {selectedStory.age} years old • {selectedStory.location}
                </p>
                <p className="text-sm text-gray-500">Diagnosed {selectedStory.timeframe}</p>
              </div>
            </div>

            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              {selectedStory.title}
            </h1>

            <div className="flex items-center space-x-4 mb-6">
              <Badge className={`${
                selectedStory.category === "Success" ? "bg-green-500" :
                selectedStory.category === "Journey" ? "bg-blue-500" :
                selectedStory.category === "Tips" ? "bg-yellow-500" :
                "bg-purple-500"
              }`}>
                {selectedStory.category}
              </Badge>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(selectedStory.date).toLocaleDateString()}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Heart className="h-4 w-4 mr-1" />
                {selectedStory.likes} likes
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <MessageCircle className="h-4 w-4 mr-1" />
                {selectedStory.comments} comments
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedStory.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Story Content */}
          <Card className="mb-8 animate-fade-in-up animation-delay-100">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                {selectedStory.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="text-xl font-bold text-purple-700 mt-6 mb-3">
                        {paragraph.slice(2, -2)}
                      </h3>
                    )
                  } else if (paragraph.startsWith('- ')) {
                    return (
                      <li key={index} className="ml-4 mb-2">
                        {paragraph.slice(2)}
                      </li>
                    )
                  } else if (paragraph.trim()) {
                    return (
                      <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    )
                  }
                  return <br key={index} />
                })}
              </div>
            </CardContent>
          </Card>

          {/* Engagement Actions */}
          <Card className="mb-8 animate-fade-in-up animation-delay-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="outline" className="hover:bg-red-50 bg-transparent">
                    <Heart className="h-4 w-4 mr-2 text-red-500" />
                    Like ({selectedStory.likes})
                  </Button>
                  <Button variant="outline" className="hover:bg-blue-50 bg-transparent">
                    <Share2 className="h-4 w-4 mr-2 text-blue-500" />
                    Share
                  </Button>
                </div>
                <Badge variant="outline" className="text-purple-600 border-purple-300">
                  {selectedStory.diagnosis}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Comments Section */}
          <Card className="animate-fade-in-up animation-delay-300">
            <CardHeader>
              <CardTitle>Comments ({selectedStory.comments})</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Add Comment */}
              <div className="space-y-4">
                <Textarea
                  placeholder="Share your thoughts or encouragement..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="resize-none"\
